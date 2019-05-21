import React from 'react'
import App, { Container } from 'next/app'
import '@atlaskit/css-reset'
import GlobalNavigation from '@atlaskit/global-navigation'

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
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
