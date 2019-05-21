import React from 'react'
import App, { Container } from 'next/app'
import '@atlaskit/css-reset'
// import GlobalNavigation from '@atlaskit/global-navigation'
// import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian'
// import AppSwitcherIcon from '@atlaskit/icon/glyph/app-switcher'
// import {
// GlobalItem,
// LayoutManager,
// NavigationProvider,
// } from '@atlaskit/navigation-next'

// const AppSwitcherComponent = props => (
//   <GlobalItem
//     {...props}
//     icon={AppSwitcherIcon}
//     id="test"
//     onClick={() => console.log('AppSwitcher clicked')}
//   />
// )

// TODO: make onClicks targets show up on page instead of console.logs
// const Global = () => (
//   <GlobalNavigation
//     productIcon={EmojiAtlassianIcon}
//     productHref="#"
//     onProductClick={() => console.log('product clicked')}
//     onCreateClick={() => console.log('create clicked')}
//     onSearchClick={() => console.log('search clicked')}
//     onStarredClick={() => console.log('starred clicked')}
//     onHelpClick={() => console.log('help clicked')}
//     helpItems={() => <div />}
//     onNotificationClick={() => console.log('notification clicked')}
//     appSwitcherComponent={AppSwitcherComponent}
//     appSwitcherTooltip="Switch to ..."
//     onSettingsClick={() => console.log('settings clicked')}
//     loginHref="#login"
//   />
// )

class MyApp extends App {
  props: {
    Component
    pageProps
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        {/* <NavigationProvider>
           <LayoutManager
            globalNavigation={() => null}
            productNavigation={() => null}
            containerNavigation={() => null}
          >*/}
        <div style={{ padding: '32px 40px' }}>
          <Component {...pageProps} />
        </div>
        {/*   </LayoutManager>
        </NavigationProvider>*/}
      </Container>
    )
  }
}

export default MyApp
