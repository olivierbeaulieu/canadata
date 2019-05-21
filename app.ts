import fetch from 'node-fetch'
import pino from 'pino'

const logger = pino({ level: process.env.LOG_LEVEL || 'info' })

function getUrl(cubeId: string) {
  return `https://www150.statcan.gc.ca/t1/wds/rest/getFullTableDownloadCSV/${cubeId}/en`
}

const API_URL = getUrl('25100063')
logger.info(`Fetching ${API_URL}`)

fetch(API_URL)
  .then(response => response.json())
  .then((response: { status: string; object: string }) => {
    const { status, object } = response

    if (status !== 'SUCCESS') {
      logger.error(response)
      throw new Error('API call getFullTableDownloadCSV failed')
    }

    logger.info(`Fetching object from ${object}`)
  })
