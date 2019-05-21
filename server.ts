import express from 'express'
import next from 'next'
import pino from 'pino'

const dev = process.env.NODE_ENV !== 'production'
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = process.env.CANADAGRAPHS_PORT || 3000

app
  .prepare()
  .then(async () => {
    const server = express()

    // if (process.env.NODE_ENV === 'production') server.use(expressLogger)

    // server.use((req, res, next) => {
    // 	logger.info(req.url, req.headers['user-agent']);
    // 	next();
    // });

    server.get('/', (req, res) => {
      app.render(req, res, '/index')
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
