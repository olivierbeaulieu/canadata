import React from 'react'
import Title from 'antd/lib/typography/title'
import { Divider } from 'antd'
import DimensionSelect from './dimension-select'
import AreaChart from './chart-view'
import { cloneDeep } from 'lodash'

interface IProps {
  rawDataPoints: IRawDataPoint[]
  metadata: ICubeMetadata
}

interface IDimensionFilters {
  [key: number]: number | number[]
}

interface IState {
  metadata: ICubeMetadata
  dimensions: IDimensionsDict
  dimensionFilters: IDimensionFilters
}

export default class ChartView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    const { metadata } = props
    const dimensions = this.getDimensionsFromMetadata(metadata)

    this.state = {
      metadata,
      dimensions,
      dimensionFilters: Object.keys(dimensions).reduce((acc, dimensionId) => {
        const dimension: IDimension = dimensions[dimensionId]
        const dimensionName = dimension.dimensionNameEn

        if (dimensionName === 'Geography') {
          // If multiselect, return an array containing the ids of all members
          acc[dimension.dimensionPositionId] = dimension.member.map(
            dimensionMember => dimensionMember.memberId
          )
        } else {
          // If single select, return the id of the first mbmer
          acc[dimension.dimensionPositionId] = dimension.member[0].memberId
        }

        return acc
      }, {}),
    }

    this.getDimensionFilters = this.getDimensionFilters.bind(this)
  }

  private processRawDataPoints(rawDataPoints: IRawDataPoint[]): IDataPoint[] {
    const dataPoints: IDataPoint[] = []
    let currentDataPoint: IDataPoint = null

    for (const rawDataPoint of rawDataPoints) {
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

      currentDataPoint.values[rawDataPoint.GEO] = Number(rawDataPoint.VALUE)
    }

    return dataPoints
  }

  /**
   * Returns an object where the key is the dimension position ID
   */
  private getDimensionsFromMetadata(metadata: ICubeMetadata): IDimensionsDict {
    return metadata.dimension.reduce((acc, dimension) => {
      const clonedDimension = cloneDeep(dimension)

      // Ensure all dimension members have a children array
      clonedDimension.member.forEach(dimensionMember => {
        const member = dimensionMember as IDimensionMember
        member.children = []
      })

      acc[dimension.dimensionPositionId] = clonedDimension

      return acc
    }, {})
  }

  private applyFilters(
    rawDataPoints: IRawDataPoint[],
    dimensionFilters: IDimensionFilters
  ): IRawDataPoint[] {
    return rawDataPoints.filter(dataPoint => {
      // console.log(dataPoint.coords)
      let match = true

      for (const id of Object.keys(dimensionFilters)) {
        const dimensionFilterId = Number(id)
        const dimensionFilterValue = dimensionFilters[dimensionFilterId]

        if (Array.isArray(dimensionFilterValue)) {
          if (
            dimensionFilterValue.includes(
              dataPoint.coords[Number(dimensionFilterId) - 1]
            ) === false
          ) {
            match = false
            break
          }
        } else if (typeof dimensionFilterId === 'number') {
          const dimensionFilterValue = dimensionFilters[dimensionFilterId]

          if (
            dimensionFilterValue !==
            dataPoint.coords[Number(dimensionFilterId) - 1]
          ) {
            match = false
            break
          }
        }
      }

      return match
    })
  }

  private getDimensionFilters(): React.ReactNode {
    const { dimensions, dimensionFilters } = this.state

    return Object.keys(dimensionFilters).map(dimensionId => {
      const isMultiple = Array.isArray(dimensionFilters[dimensionId])

      const select = (
        <DimensionSelect
          multiple={isMultiple}
          value={dimensionFilters[dimensionId]}
          dimension={dimensions[dimensionId]}
          onChange={value => {
            this.setState(state => {
              return {
                dimensionFilters: Object.assign({}, state.dimensionFilters, {
                  [dimensionId]: value,
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
    const { dimensions, dimensionFilters } = this.state
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
        <Divider />

        {this.getDimensionFilters()}

        <AreaChart
          data={processedData}
          dimensions={dimensions}
          uomId={uomId}
          type="area"
          frequencyCode={this.state.metadata.frequencyCode}
        />
      </div>
    )
  }
}
