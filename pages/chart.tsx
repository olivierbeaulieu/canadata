import React from 'react'
import CubeMetadataLoader from '../components/cube-metadata-loader'
import { Spin } from 'antd'
import ChartContainer from '../components/chart-container'

interface IProps {
  cubeId: string
}

const LoadingView = () => (
  <div className="cover-centered">
    <Spin size="large" tip="Loading data..." />
  </div>
)

export default class ChartPage extends React.Component<IProps> {
  private static getInitialProps({ query }: { query: IProps }) {
    const { cubeId } = query

    return {
      cubeId,
    }
  }

  public render(): React.ReactNode {
    const cubeId = Number(this.props.cubeId)

    return (
      <CubeMetadataLoader
        cubeId={cubeId}
        loadingView={<LoadingView />}
        render={({ metadata, dimensionFilters }) => {
          // This render method will only ever be hit on the client side
          return (
            <ChartContainer
              cubeId={cubeId}
              metadata={metadata}
              dimensionFilters={dimensionFilters}
            />
          )
        }}
      />
    )
  }
}
