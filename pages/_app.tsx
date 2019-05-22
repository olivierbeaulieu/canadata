import React from 'react'
import App, { Container } from 'next/app'
import { Layout, Menu, Icon } from 'antd'
import 'antd/dist/antd.less'
import '../styles.less'

const { Sider, Footer, Content } = Layout

interface Props {
  Component: {}
  pageProps: {}
}

class MyApp extends App<Props> {
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
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
          rel="stylesheet"
        />
        <Layout hasSider={true}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken)
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type)
            }}
          >
            <div className="logo">Graph eh?</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="area-chart" />
                <span className="nav-text">Foo</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="pie-chart" />
                <span className="nav-text">Bar</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="radar-chart" />
                <span className="nav-text">Baz</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ minHeight: '100vh' }}>
            {/* <Header style={{ background: '#fff', padding: 0 }} /> */}

            <Content style={{ margin: '24px 16px 0' }}>
              <div className="main-container">
                <Component {...pageProps} />
              </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
              Acme Inc. ©2018 Created by olvrb
            </Footer>
          </Layout>
        </Layout>
      </Container>
    )
  }
}

export default MyApp
