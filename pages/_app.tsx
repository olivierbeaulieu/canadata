import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import withGA from 'next-ga'
import Head from 'next/head'
import Link from 'next/link'
import { Layout, Row, Col } from 'antd'
import 'antd/dist/antd.less'
import '../styles.less'

const { Footer, Content } = Layout

const LogoView = () => {
  return (
    <Link href="/">
      <a className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          // height="325"
          viewBox="-1860 -2000 3720 4030"
        >
          <path
            fill="#d40000"
            d="m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 
            65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 
            115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 
            327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 
            1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 
            65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z"
          />
        </svg>
        Canadata
      </a>
    </Link>
  )
}

const FooterView = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Created by Olivier Beaulieu ©2019
    </Footer>
  )
}

interface IProps {
  Component: {}
  pageProps: {}
}

class MyApp extends App<IProps> {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Canadata</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+HK:400,500,700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/static/favicon.png" />
        </Head>

        <Layout style={{ minHeight: '100vh' }}>
          <Layout.Header style={{ background: '#fff', padding: 0 }}>
            <Row>
              <Col>
                <LogoView />
              </Col>
            </Row>
          </Layout.Header>

          <Content style={{ margin: '24px 16px' }}>
            <Component {...pageProps} />
          </Content>

          <FooterView />
        </Layout>
      </Container>
    )
  }
}

export default withGA('UA-136686455-2', Router)(MyApp)
