import React, { useState, useEffect } from 'react'
import LoadingView from './loading-view'
import {
  getVectorDataByRange,
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
    console.log('ooooh shit', [...coordinates])
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

  // // Check what needs to be fetched
  // const fetchedCoords = vectorData.map(vector => vector.coordinate)
  // const needsToBeFetched = this.props.coordinates.filter(coordinate => {
  //   return fetchedCoords.includes(coordinate) === false
  // })

  // // Fetch whatever content might be missing when the filters change
  // if (needsToBeFetched.length) {
  //   this.getVectorDataForCoordinates(needsToBeFetched).then(newData => {
  //     console.log('newData', newData)
  //     this.setState(state => {
  //       return {
  //         vectorData: [...state.vectorData, ...newData],
  //       }
  //     })
  //   })
  // }

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
    return getVectorDataByRange(vectorIds, startDate, endDate)
  }
}
