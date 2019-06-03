import React from 'react'
import { Spin } from 'antd'
import CubeDataLoader from '../components/cube-data-loader'
import ChartContainerView from '../components/chart-container'

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
          vectorData: VectorData[]
          dimensionFilters: DimensionFilters
          metadata: CubeMetadata
        }) => {
          const {
            isLoading,
            vectorData,
            isLoadingDone,
            metadata,
            dimensionFilters,
          } = props
          return (
            <div>
              {isLoadingDone ? (
                <ChartContainerView
                  vectorData={vectorData}
                  metadata={metadata}
                  dimensionFilters={dimensionFilters}
                />
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
