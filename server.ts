import express from 'express'
import next from 'next'
import pino from 'pino'
import { getCubeDataAsCsv, getCubeMetadata } from './statscan'
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

// A valid cube ID is a 8-numbers long string
function isValidCubeId(cubeId: string) {
  return /[0-9]{8}/.test(cubeId)
}

app
  .prepare()
  .then(async () => {
    const server = express()

    // if (process.env.NODE_ENV === 'production') server.use(expressLogger)

    // server.use((req, res, next) => {
    // 	logger.info(req.url, req.headers['user-agent']);
    // 	next();
    // });

    server.get('/api/cube/:cubeId', async (req, res) => {
      // const cubeId = '36100450' // Revenus, dépenses et solde budgétaire - Administrations publiques, comptes économiques provinciaux et territoriaux (x 1 000 000)
      // const cubeId = '25100063' // Supply and disposition of crude oil and equivalent1
      const { cubeId } = req.params

      // The cubeId should be
      if (isValidCubeId(cubeId) === false) {
        res.status(400).send('Invalid cubeId')
        return
      }

      let csvData

      const newMetadata = await getCubeMetadata(cubeId)

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

        res.json({
          rawDataPoints,
          metadata: newMetadata,
        })
      } catch (e) {
        logger.error(e)
        res.send(500)
      }
    })

    server.get('/chart/:cubeId', async (req, res) => {
      const { cubeId } = req.params

      if (isValidCubeId(cubeId) === false) {
        res.status(400).send('Invalid cubeId')
        return
      }

      app.render(req, res, '/index', {
        cubeId,
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

// 36100450 Revenus, dépenses et solde budgétaire - Administrations publiques, comptes économiques provinciaux et territoriaux (x 1 000 000)
// 25100063 // Supply and disposition of crude oil and equivalent1
