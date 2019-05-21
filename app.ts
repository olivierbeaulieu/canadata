import fetch from 'node-fetch'
import pino from 'pino'
import readline from 'readline'
import request from 'request-promise-native'
import yauzl from 'yauzl'

const logger = pino({ level: process.env.LOG_LEVEL || 'info' })

function getUrl(cubeId: string) {
  return `https://www150.statcan.gc.ca/t1/wds/rest/getFullTableDownloadCSV/${cubeId}/en`
}

const cubeId = '25100063'
const API_URL = getUrl(cubeId)
logger.info(`Fetching ${API_URL}`)

fetch(API_URL)
  .then(response => response.json())
  .then(async (response: { status: string; object: string }) => {
    const { status, object } = response

    if (status !== 'SUCCESS') {
      logger.error(response)
      throw new Error('API call getFullTableDownloadCSV failed')
    }

    logger.info(`Fetching object from ${object}`)

    const zipAsBuffer = await request(object, { encoding: null })
    console.log(zipAsBuffer)

    yauzl.fromBuffer(zipAsBuffer, null, (err, zipfile) => {
      if (err) throw err

      zipfile.on('entry', entry => {
        if (entry.fileName === `${cubeId}.csv`) {
          logger.info(`Opening ${entry.fileName}`)
          let csvData = ''
          zipfile.openReadStream(entry, (err, readStream) => {
            if (err) throw err
            readStream.on('data', buffer => {
              csvData += buffer.toString()
            })
            readStream.on('end', () => {
              logger.info(`Finished reading ${entry.fileName}`)
            })
          })
        }
      })
    })
  })
