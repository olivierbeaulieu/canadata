import React from 'react'
import Title from 'antd/lib/typography/Title'
import DimensionSelect from './dimension-select'
import AreaChart from './chart-view'
import { cloneDeep } from 'lodash'
import { Radio, Icon, Divider } from 'antd'

interface IProps {
  rawDataPoints: RawDataPoint[]
  metadata: CubeMetadata
}

interface IDimensionFilters {
  [key: number]: number[]
}

interface IState {
  metadata: CubeMetadata
  dimensions: DimensionsDict
  dimensionFilters: IDimensionFilters
  chartType: ChartType
}

export default class ChartView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    const { metadata } = props
    const dimensions = this.getDimensionsFromMetadata(metadata)

    this.state = {
      metadata,
      dimensions,
      chartType: 'line',
      dimensionFilters: Object.keys(dimensions).reduce((acc, dimensionId) => {
        const dimension: Dimension = dimensions[dimensionId]
        const dimensionName = dimension.dimensionNameEn

        if (dimensionName === 'Geography') {
          // If Geography, return an array containing the ids of all members
          acc[dimension.dimensionPositionId] = dimension.member.map(
            dimensionMember => dimensionMember.memberId
          )
        } else {
          // If single select, return an array with the id of the first mbmer
          acc[dimension.dimensionPositionId] = [dimension.member[0].memberId]
        }

        return acc
      }, {}),
    }

    this.getDimensionFilterSelects = this.getDimensionFilterSelects.bind(this)
  }

  private processRawDataPoints(rawDataPoints: RawDataPoint[]): DataPoint[] {
    const dataPoints: DataPoint[] = []
    let currentDataPoint: DataPoint = null

    for (const rawDataPoint of rawDataPoints) {
      // Check if we are done processing a specific date
      if (
        !currentDataPoint ||
        currentDataPoint.date !== rawDataPoint.REF_DATE
      ) {
        currentDataPoint = {
          date: rawDataPoint.REF_DATE,
          values: {},
        }
        dataPoints.push(currentDataPoint)
      }

      currentDataPoint.values[rawDataPoint.COORDINATE] = Number(
        rawDataPoint.VALUE
      )
    }

    return dataPoints
  }

  /**
   * Returns an object where the key is the dimension position ID
   */
  private getDimensionsFromMetadata(metadata: CubeMetadata): DimensionsDict {
    return metadata.dimension.reduce((acc, dimension) => {
      const clonedDimension = cloneDeep(dimension)

      // Ensure all dimension members have a children array
      clonedDimension.member.forEach(dimensionMember => {
        const member = dimensionMember as DimensionMember
        member.children = []
      })

      acc[dimension.dimensionPositionId] = clonedDimension

      return acc
    }, {})
  }

  private applyFilters(
    rawDataPoints: RawDataPoint[],
    dimensionFilters: IDimensionFilters
  ): RawDataPoint[] {
    return rawDataPoints.filter(dataPoint => {
      let match = true

      for (const id of Object.keys(dimensionFilters)) {
        const dimensionFilterId = Number(id)
        const dimensionFilterValue = dimensionFilters[dimensionFilterId]
        const coordIndex = Number(dimensionFilterId) - 1

        if (!dimensionFilterValue.includes(dataPoint.coords[coordIndex])) {
          match = false
          break
        }
      }

      return match
    })
  }

  private getDimensionFilterSelects(): React.ReactNode {
    const { dimensions, dimensionFilters } = this.state

    return Object.keys(dimensionFilters).map(dimensionId => {
      const isMultiple = true

      // If there are zero or one options, don't show the select
      if (dimensions[dimensionId].member.length <= 1) {
        return null
      }

      const select = (
        <DimensionSelect
          multiple={isMultiple}
          value={dimensionFilters[dimensionId]}
          dimension={dimensions[dimensionId]}
          onChange={value => {
            this.setState(state => {
              const newValue = isMultiple ? value : [value]

              return {
                dimensionFilters: Object.assign({}, state.dimensionFilters, {
                  [dimensionId]: newValue,
                }),
              }
            })
          }}
        />
      )

      return (
        <React.Fragment key={`dimension-filter-group-${dimensionId}`}>
          <Title level={4}>{dimensions[dimensionId].dimensionNameEn}</Title>
          {select}
          <Divider />
        </React.Fragment>
      )
    })
  }

  public render(): React.ReactNode {
    const { rawDataPoints } = this.props
    const { chartType, dimensions, dimensionFilters } = this.state
    const uomId = Number(rawDataPoints[0].UOM_ID)

    console.log({
      state: this.state,
      props: this.props,
    })

    // Apply dimension filters to the raw data points
    const data = this.applyFilters(rawDataPoints, dimensionFilters)

    // Convert raw data points into formatted data points
    const processedData = this.processRawDataPoints(data)

    return (
      <div>
        <Title level={2}>{this.state.metadata.cubeTitleEn}</Title>

        <AreaChart
          data={processedData}
          dimensions={dimensions}
          uomId={uomId}
          type={chartType}
          frequencyCode={this.state.metadata.frequencyCode}
        />

        <Divider />

        {this.getDimensionFilterSelects()}

        <Title level={4}>Chart Type</Title>
        <Radio.Group
          value={chartType}
          onChange={event => {
            this.setState({
              chartType: event.target.value,
            })
          }}
        >
          <Radio.Button value="line">
            <Icon type="line-chart" />
            &nbsp;Line
          </Radio.Button>
          <Radio.Button value="area">
            <Icon type="area-chart" />
            &nbsp;Area
          </Radio.Button>
        </Radio.Group>
      </div>
    )
  }
}
