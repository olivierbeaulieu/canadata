import React, { useState, useEffect } from 'react'
import { getCubeMetadata } from '../utils/statscan'
import LoadingView from './loading-view'

type Props = {
  cubeId: number
  render: (state: RenderProps) => React.ReactElement
}

export type RenderProps = {
  isLoading: boolean
  isLoadingDone: boolean
  metadata: CubeMetadata
  dimensionFilters: DimensionFilters
}

export default function CubeMetadataLoader(props: Props): React.ReactElement {
  const { cubeId, render } = props
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingDone, setIsLoadingDone] = useState(false)
  const [metadata, setMetadata] = useState(null)
  const [dimensionFilters, setDimensionFilters] = useState(null)

  useEffect(() => {
    let didCancel = false

    setIsLoading(true)

    // Fetch the metadata, compute the default filters and generate coords to fetch
    getCubeMetadata(cubeId).then(metadata => {
      if (didCancel) return

      const dimensionFilters = getFiltersFromMetadata(metadata)
      setIsLoading(false)
      setIsLoadingDone(true)
      setDimensionFilters(dimensionFilters)
      setMetadata(metadata)
    })

    return () => {
      didCancel = true
    }
  }, [cubeId])

  if ((isLoading && !isLoadingDone) || !metadata) {
    return <LoadingView isLoading={true} text="Loading chart..." />
  }

  return render({ isLoading, isLoadingDone, metadata, dimensionFilters })
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
