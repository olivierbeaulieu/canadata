import pino from 'pino'

const dev = process.env.NODE_ENV !== 'production'

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  prettyPrint: dev ? { colorize: true, translateTime: true } : false,
})

export default logger
