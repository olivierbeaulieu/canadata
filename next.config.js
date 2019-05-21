const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(
  withCSS(
    withSass({
      webpack(config, { dev }) {
        if (dev) {
          config.devtool = 'cheap-module-source-map'
        }
        return config
      },
    })
  )
)
