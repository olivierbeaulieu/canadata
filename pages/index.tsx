import React from 'react'
import { Spin } from 'antd'
import CubeDataLoader from '../components/cube-data-loader'
import ChartView from '../components/chart-view'

interface IProps {
  cubeId: string
}

export default class IndexPage extends React.Component<IProps> {
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
          rawDataPoints: IRawDataPoint[]
          metadata: ICubeMetadata
        }) => {
          const { isLoading, isLoadingDone, rawDataPoints, metadata } = props
          return (
            <div>
              {isLoadingDone ? (
                <ChartView rawDataPoints={rawDataPoints} metadata={metadata} />
              ) : (
                <Spin size="large" />
              )}
            </div>
          )
        }}
      />
    )
  }
}
