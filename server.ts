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

process.on('unhandledRejection', event => {
  logger.error(event)
})

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
      // const cubeId = '36100450' // Revenus, dépenses et solde budgétaire - Administrations publiques, comptes économiques provinciaux et territoriaux (x 1 000 000)
      const cubeId = '25100063' // Supply and disposition of crude oil and equivalent1
      let csvData

      try {
        if (cubeCache[cubeId]) {
          csvData = cubeCache[cubeId]
        } else {
          csvData = cubeCache[cubeId] = await getCubeDataAsCsv(cubeId)
        }

        const rawDataPoints = await csvToJson().fromString(csvData.data)
        const metadata = await Promise.all(
          csvData.metadata
            .split('\n\n')
            .map(async cube => csvToJson().fromString(cube))
        )

        app.render(req, res, '/index', {
          rawDataPoints,
          metadata: JSON.stringify(metadata),
        })
      } catch (e) {
        logger.error(e)

        app.render(req, res, '/graph-loading-error')
      }
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
