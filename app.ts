import fetch from 'node-fetch'
import pino from 'pino'
import readline from 'readline'
import request from 'request-promise-native'
import yauzl from 'yauzl'

const logger = pino({ level: process.env.LOG_LEVEL || 'info' })
const cubeId = '25100063'
;(async () => {
  const zipUrl = await getFullTableDownloadCSV(cubeId)
  logger.info(`Fetching data from API ${zipUrl}`)

  logger.info(`Fetching object from ${zipUrl}`)
  const zipAsBuffer = await request(zipUrl, { encoding: null })
  console.log(zipAsBuffer)

  const zipfile = await getZipfileFromBuffer(zipAsBuffer)
  const files = await getFilesContentFromZipFile([`${cubeId}.csv`], zipfile)

  console.log(Object.keys(files), files[`${cubeId}.csv`].length)
})()

async function getFilesContentFromZipFile(
  filenames: string[],
  zipfile: yauzl.ZipFile
): Promise<{ [key: string]: string }> {
  return new Promise(async (resolve, reject) => {
    const fileReadingPromises: Promise<any>[] = []
    const filesContent = {}

    // Called once per file in the zipfile
    zipfile.on('entry', entry => {
      // Check if this entry was requested
      console.log(filenames, entry.fileName)
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

  interface Response {
    status: string
    object: string
  }
  const response: Response = await fetch(url).then(response => response.json())
  const { status, object } = response

  if (status !== 'SUCCESS') {
    logger.error(response)
    throw new Error(
      'API Request getFullTableDownloadCSV returned a status different from SUCCESS'
    )
  }

  return object
}
