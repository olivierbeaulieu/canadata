import React from 'react'
import Title from 'antd/lib/typography/title'
import { Divider } from 'antd'
import DimensionSelect from '../components/dimension-select'
import LineChart from '../components/line-chart'

interface IRawDataPoint {
  GEO: string
  REF_DATE: string
  VALUE: string
  UOM: string
}

interface IProps {
  rawDataPoints: IRawDataPoint[]
  metadata: ICubeMetadata
}

interface IState {
  metadata: ICubeMetadata
  dimensions: IDimensionsDict
  dimensionsById: IDimensionsByIdDict
  dimensionFilters: {
    [key: string]: string | string[]
  }
}

export default class ChartView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    const { metadata } = props
    const dimensions = this.getDimensionsFromMetadata(metadata)

    const dimensionsById = Object.keys(dimensions).reduce(
      (acc, dimensionName) => {
        acc[dimensionName] = dimensions[dimensionName].reduce(
          (acc, dimension) => {
            acc[dimension.id] = dimension
            return acc
          },
          {}
        )

        return acc
      },
      {}
    )

    this.state = {
      metadata,
      dimensions,
      dimensionsById,
      dimensionFilters: Object.keys(dimensions).reduce((acc, dimensionName) => {
        if (dimensionName === 'Geography') {
          // Multiselect
          acc[dimensionName] = dimensions[dimensionName].map(
            dimensionValue => dimensionValue.id
          )
        } else {
          // Single select
          acc[dimensionName] = dimensions[dimensionName][0].id
        }

        return acc
      }, {}),
    }
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

  private getDimensionsFromMetadata(metadata): IDimensionsDict {
    const dimensions = {}
    const dimensionsById = []

    metadata.dimension.forEach(dimension => {
      // todo make bilingual
      dimensions[dimension.dimensionNameEn] = dimension.member.map(
        dimensionMember => {
          return {
            name: dimensionMember.memberNameEn,
            id: dimensionMember.memberId,
            parentId: dimensionMember.parentMemberId,
            children: [],
          }
        }
      )
    })

    return dimensions
  }

  public render(): React.ReactNode {
    const {
      metadata,
      dimensions,
      dimensionsById,
      dimensionFilters,
    } = this.state

    console.log(this.state)

    // Apply dimension filters to the raw data points
    const data = this.props.rawDataPoints.filter(dataEntry => {
      return true
      const dimensionNames = Object.keys(dimensionFilters)
      let match = true

      for (const dimensionName of dimensionNames) {
        const filterValue = dimensionFilters[dimensionName]

        // If the filter is an array, verify if the value is in the array
        if (Array.isArray(filterValue)) {
          let key = dimensionName

          // Patch for the weird case where the dimension is Geography, but the field in the data is GEO
          if (dimensionName === 'Geography') key = 'GEO'

          // Find the dimension value id that matches this name
          const dimensionValue = dimensions[dimensionName].find(
            dimensionValue => dimensionValue.name === dataEntry[key]
          )

          if (!dimensionValue) {
            console.error(
              `could not find a value for ${dimensionName} and name ${
                dataEntry[key]
              }`
            )
            console.log(dimensions)
            return
          }

          if (filterValue.includes(dimensionValueId.id) === false) {
            match = false
            break
          }

          // If the filter is a string, verify if the value matches the string
        } else if (
          typeof filterValue === 'string' &&
          dataEntry[dimensionName] !==
            dimensionsById[dimensionName][filterValue].name
        ) {
          match = false
          break
        }
      }

      return match
    })

    // Convert raw data points into formatted data points
    const processedData = this.processRawDataPoints(data)

    return (
      <div>
        <Title level={2}>{this.state.metadata.cubeTitleEn}</Title>
        <Divider />

        {Object.keys(dimensionFilters).map(filterName => {
          const isMultiple = Array.isArray(dimensionFilters[filterName])
          const select = (
            <DimensionSelect
              multiple={isMultiple}
              value={dimensionFilters[filterName]}
              dimensionName={filterName}
              dimensionValues={dimensions[filterName]}
              onChange={value => {
                this.setState(state => {
                  return {
                    dimensionFilters: Object.assign(
                      {},
                      state.dimensionFilters,
                      {
                        [filterName]: value,
                      }
                    ),
                  }
                })
              }}
            />
          )

          return (
            <React.Fragment key={`dimension-filter-group-${filterName}`}>
              <Title level={4}>{filterName}</Title>
              {select}
              <Divider />
            </React.Fragment>
          )
        })}

        <LineChart
          data={processedData}
          dimensions={dimensions}
          frequencyCode={this.state.metadata.frequencyCode}
        />

        {/* <pre>{JSON.stringify(this.state.metadata, null, 4)}</pre> */}
      </div>
    )
  }
}
