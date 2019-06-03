import React from 'react'
import {
  getCubeMetadata,
  getVectorDataByRange,
  getSeriesInfoFromCubeIdCoord,
} from '../statscan-client'
import { dimensionFilterMapToCoordsList } from '../utils/format'

interface IProps {
  cubeId: string
  render: (state: IState) => React.ReactNode
}

interface IState {
  isLoading: boolean
  isLoadingDone: boolean
  dimensionFilters: DimensionFilters
  vectorData?: VectorData[]
  metadata?: {}
}

export default class CubeDataLoader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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

    const cubeId = Number(this.props.cubeId)

    // Fetch the metadata, compute the default filters and generate coords to fetch
    const metadata = await getCubeMetadata(cubeId)
    const dimensionFilters = getFiltersFromMetadata(metadata)
    const coordinates = dimensionFilterMapToCoordsList(dimensionFilters)

    // Fetch the vector IDs for the required coordinates
    const vectorIds = await getSeriesInfoFromCubeIdCoord(cubeId, coordinates)

    // Fetch vector data for the entire lifetime of the cube
    const vectorData = await getVectorDataByRange(
      vectorIds,
      metadata.cubeStartDate,
      metadata.cubeEndDate
    )

    this.setState({
      isLoading: false,
      isLoadingDone: true,
      vectorData,
      dimensionFilters,
      metadata,
    })
  }

  public render() {
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
