import React from 'react'
import {
  getVectorDataByRange,
  getSeriesInfoFromCubeIdCoord,
} from '../statscan-client'

interface IProps {
  cubeId: number
  coordinates: string[]
  startDate: string
  endDate: string
  render: (state: IState) => React.ReactNode
  loadingView: React.ReactElement
}

interface IState {
  isLoading: boolean
  isLoadingDone: boolean
  vectorData?: VectorData[]
}

export default class CubeDataLoader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      isLoading: false,
      isLoadingDone: false,
      vectorData: null,
    }
  }

  public async componentDidMount() {
    this.setState({
      isLoading: true,
    })

    const { cubeId, coordinates, startDate, endDate } = this.props

    // Fetch the vector IDs for the required coordinates
    const vectorIds = await getSeriesInfoFromCubeIdCoord(cubeId, coordinates)

    // Fetch vector data for the entire lifetime of the cube
    const vectorData = await getVectorDataByRange(vectorIds, startDate, endDate)

    this.setState({
      isLoading: false,
      isLoadingDone: true,
      vectorData,
    })
  }

  public render() {
    const { isLoading, isLoadingDone, vectorData } = this.state

    if ((isLoading && !isLoadingDone) || !vectorData) {
      return this.props.loadingView
    }

    // Check what needs to be fetched
    const fetchedCoords = vectorData.map(vector => vector.coordinate)
    this.props.coordinates.forEach(coordinate => {
      if (fetchedCoords.includes(coordinate) === false) {
        console.log(`${coordinate} needs to be fetched`)
      }
    })

    return this.props.render(this.state)
  }
}
