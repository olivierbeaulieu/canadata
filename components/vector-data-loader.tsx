import React, { useState, useEffect } from 'react'
import LoadingView from './loading-view'
import {
  getVectorDataByRange as getVectorData,
  getSeriesInfoFromCubeIdCoord,
} from '../utils/statscan'

type Props = {
  cubeId: number
  coordinates: string[]
  startDate: string
  endDate: string
  render: (state: RenderProps) => React.ReactElement
}

type RenderProps = {
  isLoading: boolean
  isLoadingDone: boolean
  vectorData: VectorData[]
}

export default function VectorDataLoader(props: Props): React.ReactElement {
  const { cubeId, coordinates, startDate, endDate, render } = props

  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingDone, setIsLoadingDone] = useState(false)
  const [vectorData, setVectorData] = useState(null)

  useEffect(() => {
    let didCancel = false

    setIsLoading(true)

    getVectorDataForCoordinates(coordinates).then(vectorData => {
      // If the view was re-rendered for some reason, ignore the new data we just fetched
      if (didCancel) return

      setIsLoading(false)
      setIsLoadingDone(true)
      setVectorData(vectorData)
    })

    return () => (didCancel = true)
  }, [...coordinates])

  return (
    <>
      <LoadingView isLoading={isLoading} text="Loading data..." />
      {isLoadingDone &&
        vectorData &&
        render({ isLoading, isLoadingDone, vectorData })}
    </>
  )

  async function getVectorDataForCoordinates(
    coordinates: string[]
  ): Promise<VectorData[]> {
    const vectorIds = await getSeriesInfoFromCubeIdCoord(cubeId, coordinates)

    // Fetch vector data for the entire lifetime of the cube
    return getVectorData(vectorIds)
  }
}
