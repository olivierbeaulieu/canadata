import React from 'react'

interface IProps {
  cubeId: number
  render: (state: IState) => React.ReactNode
}

interface IState {
  isLoading: boolean
  isLoadingDone: boolean
  rawDataPoints?: IRawDataPoint[]
  metadata?: Array<{}>
}

export default class CubeDataLoader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      isLoading: false,
      isLoadingDone: false,
      rawDataPoints: null,
      metadata: null,
    }
  }

  public async componentDidMount() {
    this.setState({
      isLoading: true,
    })

    const cubeData = await fetch(`/api/cube/${this.props.cubeId}`).then(res =>
      res.json()
    )
    console.log(cubeData)

    this.setState({
      isLoading: false,
      isLoadingDone: true,
      rawDataPoints: cubeData.rawDataPoints,
      metadata: cubeData.metadata,
    })
  }

  public render() {
    return this.props.render(this.state)
  }
}
