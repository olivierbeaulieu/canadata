import fetch from 'node-fetch'
import request from 'request-promise-native'
import logRequestProgress from './utils/log-request-progress'
import yauzl from 'yauzl'
import logger from './logger'

export async function getCubeMetadata(cubeId: string) {
  const response = await fetch(
    'https://www150.statcan.gc.ca/t1/wds/rest/getCubeMetadata',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ productId: Number(cubeId) }]),
    }
  )
    .then(response => response.json())
    .then(response => response[0])

  if (response.status !== 'SUCCESS') {
    throw new Error(`Failed to fetch metadata for productId ${cubeId}`)
  }

  return response.object
}

export async function getCubeDataAsCsv(
  cubeId: string
): Promise<{ data: string; metadata: string }> {
  const zipUrl = await getFullTableDownloadCSV(cubeId)
  // const zipUrl = `http://localhost:8000/${cubeId}-eng.zip`

  const zipAsBuffer = await logRequestProgress(
    `Loading zipfile for cube ${cubeId}`,
    request(zipUrl, {
      encoding: null,
    })
  )

  const zipfile = await getZipfileFromBuffer(zipAsBuffer)

  const dataFilename = `${cubeId}.csv`
  const metadataFilename = `${cubeId}_MetaData.csv`
  const files = await getFilesContentFromZipFile(
    [dataFilename, metadataFilename],
    zipfile
  )

  return {
    data: files[dataFilename],
    metadata: files[metadataFilename],
  }
}

async function getFilesContentFromZipFile(
  filenames: string[],
  zipfile: yauzl.ZipFile
): Promise<{ [key: string]: string }> {
  return new Promise(async (resolve, reject) => {
    const fileReadingPromises: Array<Promise<any>> = []
    const filesContent = {}

    // Called once per file in the zipfile
    zipfile.on('entry', entry => {
      // Check if this entry was requested
      if (filenames.includes(entry.fileName) === false) return

      let fileContent = ''
      logger.info(`Opening ${entry.fileName}`)

      // Add this operation to the list of promises to wait on before returning
      const readFile = new Promise((resolve, reject) => {
        zipfile.openReadStream(entry, (err, readStream) => {
          if (err) {
            reject(err)
            return
          }

          readStream.on('data', buffer => {
            fileContent += buffer.toString()
          })
          readStream.on('end', () => {
            logger.info(`Finished reading ${entry.fileName}`)
            filesContent[entry.fileName] = fileContent
            resolve()
          })
        })
      })

      fileReadingPromises.push(readFile)
    })

    zipfile.on('end', async () => {
      await Promise.all(fileReadingPromises)
      resolve(filesContent)
    })
  })
}

async function getZipfileFromBuffer(buffer: Buffer): Promise<yauzl.ZipFile> {
  return new Promise((resolve, reject) => {
    yauzl.fromBuffer(buffer, null, (err, zipfile) => {
      if (err) {
        reject(err)
        return
      }

      resolve(zipfile)
    })
  })
}

// Calls the StatsCan API and returns the 'object' property of the response
async function getFullTableDownloadCSV(cubeId: string): Promise<string> {
  const url = `https://www150.statcan.gc.ca/t1/wds/rest/getFullTableDownloadCSV/${cubeId}/en`

  interface IResponse {
    status: string
    object: string
  }
  const response: IResponse = await fetch(url).then(response => response.json())
  const { status, object } = response

  if (status !== 'SUCCESS') {
    logger.error(response)
    throw new Error(
      'API Request getFullTableDownloadCSV returned a status different from SUCCESS'
    )
  }

  return object
}
