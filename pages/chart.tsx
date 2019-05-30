import React from 'react'
import { Spin } from 'antd'
import CubeDataLoader from '../components/cube-data-loader'
import ChartView from '../components/chart-container'

interface IProps {
  cubeId: string
}

export default class ChartPage extends React.Component<IProps> {
  private static getInitialProps({ query }: { query: IProps }) {
    const { cubeId } = query

    return {
      cubeId,
    }
  }

  public render(): React.ReactNode {
    return (
      <CubeDataLoader
        cubeId={this.props.cubeId}
        render={(props: {
          isLoading: boolean
          isLoadingDone: boolean
          rawDataPoints: RawDataPoint[]
          metadata: CubeMetadata
        }) => {
          const { isLoading, isLoadingDone, rawDataPoints, metadata } = props
          return (
            <div>
              {isLoadingDone ? (
                <ChartView rawDataPoints={rawDataPoints} metadata={metadata} />
              ) : (
                <div className="cover-centered">
                  <Spin size="large" tip="Loading data..." />
                </div>
              )}
            </div>
          )
        }}
      />
    )
  }
}
