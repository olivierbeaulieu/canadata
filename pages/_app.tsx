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
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                // height="325"
                viewBox="-1860 -2000 3720 4030"
              >
                <path
                  fill="#d40000"
                  d="m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z"
                />
              </svg>
              Graph eh?
            </div>
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
