const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: [
          //       '@atlaskit/analytics-gas-types',
          //       '@atlaskit/analytics-namespaced-context',
          //       '@atlaskit/analytics-next',
          //       '@atlaskit/atlassian-switcher',
          //       '@atlaskit/avatar',
          //       '@atlaskit/badge',
          //       '@atlaskit/blanket',
          //       '@atlaskit/button',
          //       '@atlaskit/code',
          //       '@atlaskit/css-reset',
          //       '@atlaskit/docs',
          //       '@atlaskit/drawer',
          //       '@atlaskit/dropdown-menu',
          //       '@atlaskit/droplist',
          //       '@atlaskit/global-navigation',
          //       // '@atlaskit/icon',
          //       '@atlaskit/item',
          //       '@atlaskit/layer',
          //       '@atlaskit/logo',
          //       '@atlaskit/lozenge',
          //       '@atlaskit/navigation-next',
          //       '@atlaskit/notification-indicator',
          //       '@atlaskit/notification-log-client',
          '@atlaskit/page',
          '@atlaskit/page-header',
          //       '@atlaskit/popper',
          //       '@atlaskit/portal',
          //       // '@atlaskit/select',
          //       '@atlaskit/spinner',
          '@atlaskit/theme',
          //       '@atlaskit/tooltip',
          //       '@atlaskit/type-helpers',
          //       '@atlaskit/util-service-support',
        ],
      },
    ],
    withTypescript,
    withCSS,
    withSass,
  ],
  {
    webpack(config, options) {
      if (options.dev) {
        config.devtool = 'cheap-module-source-map'
      }

      return config
    },
  }
)
