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
      let csvData

      if (cubeCache[cubeId]) {
        csvData = cubeCache[cubeId]
      } else {
        csvData = cubeCache[cubeId] = await getCubeDataAsCsv(cubeId)
      }

      const data = await csvToJson().fromString(csvData.data)
      const metadata = await Promise.all(
        csvData.metadata
          .split('\n\n')
          .map(async cube => await csvToJson().fromString(cube))
      )

      app.render(req, res, '/index', {
        data,
        metadata: JSON.stringify(metadata),
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
