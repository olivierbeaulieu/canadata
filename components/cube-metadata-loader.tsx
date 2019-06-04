import React from 'react'
import { getCubeMetadata } from '../utils/statscan'

type Props = {
  cubeId: number
  loadingView: React.ReactNode
  render: (state: State) => React.ReactNode
}

export type State = {
  isLoading: boolean
  isLoadingDone: boolean
  metadata: CubeMetadata
  dimensionFilters: DimensionFilters
}

export default class CubeMetadataLoader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isLoading: false,
      isLoadingDone: false,
      metadata: null,
      dimensionFilters: null,
    }
  }

  public async componentDidMount() {
    this.setState({
      isLoading: true,
    })

    const { cubeId } = this.props

    // Fetch the metadata, compute the default filters and generate coords to fetch
    const metadata = await getCubeMetadata(cubeId)
    const dimensionFilters = getFiltersFromMetadata(metadata)

    this.setState({
      isLoading: false,
      isLoadingDone: true,
      dimensionFilters,
      metadata,
    })
  }

  public render() {
    const { isLoading, isLoadingDone, metadata } = this.state

    if ((isLoading && !isLoadingDone) || !metadata) {
      return this.props.loadingView
    }

    return this.props.render(this.state)
  }
}

/**
 * Builds the default DimensionFilters map to be used by the ChartContainerView
 */
function getFiltersFromMetadata(metadata: CubeMetadata): DimensionFilters {
  const dimensions = metadata.dimension

  return Object.keys(dimensions).reduce((acc, dimensionId, index) => {
    const dimension: Dimension = dimensions[dimensionId]
    const dimensionName = dimension.dimensionNameEn

    if (index === 0) {
      // If Geography, return an array containing the ids of all members
      acc[dimension.dimensionPositionId] = dimension.member.map(
        dimensionMember => dimensionMember.memberId
      )
    } else {
      // If single select, return an array with the id of the first mbmer
      acc[dimension.dimensionPositionId] = [dimension.member[0].memberId]
    }

    return acc
  }, {})
}
