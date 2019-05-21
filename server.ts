import express from 'express'
import next from 'next'
import pino from 'pino'
import { getCubeDataAsCsv } from './statscan'
import csvToJson from 'csvtojson'

const dev = process.env.NODE_ENV !== 'production'
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = process.env.CANADAGRAPHS_PORT || 3000

const cubeCache = {}

app
  .prepare()
  .then(async () => {
    const server = express()

    // if (process.env.NODE_ENV === 'production') server.use(expressLogger)

    // server.use((req, res, next) => {
    // 	logger.info(req.url, req.headers['user-agent']);
    // 	next();
    // });

    server.get('/', async (req, res) => {
      const cubeId = '25100063'
      let csvString

      if (cubeCache[cubeId]) {
        csvString = cubeCache[cubeId]
      } else {
        csvString = cubeCache[cubeId] = await getCubeDataAsCsv(cubeId)
      }

      const jsonData = await csvToJson({
        // noheader: true,
        // output: 'csv',
      }).fromString(csvString)
      // .then(csvRow => {
      //   console.log(csvRow) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
      // })

      app.render(req, res, '/index', {
        jsonData,
      })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, err => {
      if (err) throw err
      logger.info(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch(ex => {
    logger.error(ex.stack)
    process.exit(1)
  })
