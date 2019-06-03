import express from 'express'
import next from 'next'
import logger from './logger'

const dev = process.env.NODE_ENV !== 'production'
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

    server.get('/chart/:cubeId', async (req, res) => {
      const { cubeId } = req.params

      if (isValidCubeId(cubeId) === false) {
        res.status(400).send('Invalid cubeId')
        return
      }

      app.render(req, res, '/chart', {
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
