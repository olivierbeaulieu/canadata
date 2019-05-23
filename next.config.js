;(() => {
  const withCSS = require('@zeit/next-css')
  const withLess = require('@zeit/next-less')
  const withTypescript = require('@zeit/next-typescript')
  const withPlugins = require('next-compose-plugins')

  // fix: prevents error when .less files are required by node
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
  }

  module.exports = withPlugins(
    [
      withTypescript,
      withCSS,
      [
        withLess,
        {
          lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: {
              'font-family': `'Open Sans', Helvetica, Arial, sans-serif`,
              'layout-sider-background': 'white',
              'menu-dark-bg': 'none',
              'menu-dark-item-active-bg': '#065ddc',
            },
          },
        },
      ],
    ],
    {
      webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
        if (dev) {
          config.devtool = 'cheap-module-source-map'
        }

        return config
      },
    }
  )
})()
