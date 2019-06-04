import React from 'react'
import {
  getVectorDataByRange,
  getSeriesInfoFromCubeIdCoord,
} from '../utils/statscan'

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

    this.getVectorDataForCoordinates = this.getVectorDataForCoordinates.bind(
      this
    )
  }

  public async componentDidMount() {
    this.setState({
      isLoading: true,
    })

    const { cubeId, coordinates, startDate, endDate } = this.props
    const vectorData = await this.getVectorDataForCoordinates(coordinates)

    this.setState({
      isLoading: false,
      isLoadingDone: true,
      vectorData,
    })
  }

  private async getVectorDataForCoordinates(
    coordinates: string[]
  ): Promise<VectorData[]> {
    const { cubeId, startDate, endDate } = this.props

    const vectorIds = await getSeriesInfoFromCubeIdCoord(cubeId, coordinates)

    // Fetch vector data for the entire lifetime of the cube
    return getVectorDataByRange(vectorIds, startDate, endDate)
  }

  public render() {
    const { isLoading, isLoadingDone, vectorData } = this.state

    if ((isLoading && !isLoadingDone) || !vectorData) {
      return this.props.loadingView
    }

    // Check what needs to be fetched
    const fetchedCoords = vectorData.map(vector => vector.coordinate)
    const needsToBeFetched = this.props.coordinates.filter(coordinate => {
      return fetchedCoords.includes(coordinate) === false
    })

    // Fetch whatever content might be missing when the filters change
    if (needsToBeFetched.length) {
      this.getVectorDataForCoordinates(needsToBeFetched).then(newData => {
        console.log('newData', newData)
        this.setState(state => {
          return {
            vectorData: [...state.vectorData, ...newData],
          }
        })
      })
    }

    return this.props.render(this.state)
  }
}
