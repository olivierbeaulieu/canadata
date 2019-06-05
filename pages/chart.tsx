import React from 'react'
import CubeMetadataLoader from '../components/cube-metadata-loader'
import ChartContainer from '../components/chart-container'

type Props = {
  cubeId: string
}

export default class ChartPage extends React.Component<Props> {
  private static getInitialProps({ query }: { query: Props }) {
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
