import React from 'react'
import dayjs from 'dayjs'
import Title from 'antd/lib/typography/title'
import randomColor from 'randomcolor'
import { Select, Divider } from 'antd'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const formatNumbers = (value: number) =>
  new Intl.NumberFormat('en').format(value)

interface DataEntry {
  GEO: string
  REF_DATE: string
  VALUE: string
  UOM: string
}

interface Dimension {
  id: number
  parentId: number
  name: string
}

interface DimensionsDict {
  [key: string]: Dimension[]
}

interface Props {
  data: DataEntry[]
  metadata: string
}

interface State {
  metadata: {}[]
  dimensions: DimensionsDict
  dimensionFilters: {
    [key: string]: string
  }
  colors: string[]
}

const DimensionSelect = (options: {
  dimensions: Dimension[]
  onChange: any
  defaultValue: string
}) => {
  const { dimensions, onChange, defaultValue } = options

  return (
    <Select
      defaultValue={defaultValue}
      dropdownMatchSelectWidth={false}
      onChange={onChange}
    >
      {dimensions.map(dimension => (
        <Select.Option value={dimension.id}>{dimension.name}</Select.Option>
      ))}
    </Select>
  )
}

export default class IndexPage extends React.Component<Props, State> {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    const metadata = JSON.parse(props.metadata)
    const dimensions = this.getDimensionsFromMetadata(metadata)

    this.state = {
      metadata,
      dimensions,
      dimensionFilters: Object.keys(dimensions).reduce((acc, dimensionName) => {
        if (dimensionName === 'Geography') return acc

        acc[dimensionName] = dimensions[dimensionName][0].name
        return acc
      }, {}),
      colors: randomColor({
        count: dimensions['Geography'].length,
        // luminosity: 'bright',
      }),
    }
  }

  static getInitialProps({ query }: { query: Props }) {
    const { data, metadata } = query

    return {
      data,
      metadata,
    }
  }

  processData(data: DataEntry[]) {
    const processedData = []
    let current: any = null

    for (let entry of data) {
      if (!current || current.date !== entry.REF_DATE) {
        // Create a new entry
        current = {
          date: entry.REF_DATE,
          values: {},
        }
        processedData.push(current)
      }

      current.values[entry.GEO] = Number(entry.VALUE)
    }

    return processedData
  }

  getTitleFromMetadata(metadata): string {
    return metadata[0][0]['Cube Title']
  }
  getProductIdFromMetadata(metadata): string {
    return metadata[0][0]['Product Id']
  }
  getDimensionsFromMetadata(metadata): DimensionsDict {
    const dimensions = {}
    const dimensionsById = []

    // Initialize the dimensions
    metadata[1].forEach(entry => {
      const id = entry['Dimension ID']
      const name = entry['Dimension name']
      dimensions[name] = dimensionsById[id] = []
    })

    // Populate the dimensions
    metadata[2].forEach(entry => {
      const id = entry['Dimension ID']
      dimensionsById[id].push({
        name: entry['Member Name'],
        id: entry['Member ID'],
        parentId: entry['Parent Member ID'],
      })
    })

    return dimensions
  }

  render() {
    const { metadata, dimensions, dimensionFilters } = this.state

    const data = this.props.data.filter(entry => {
      return (
        entry['Units of measure'] ===
          this.state.dimensionFilters['Units of measure'] &&
        entry['Supply and disposition'] ===
          this.state.dimensionFilters['Supply and disposition']
      )
    })

    const processedData = this.processData(data)

    return (
      <div>
        <Title level={2}>{this.getTitleFromMetadata(metadata)}</Title>
        <Divider />

        {Object.keys(dimensionFilters).map(dimensionName => {
          return (
            <>
              <Title level={3}>{dimensionName}</Title>
              <DimensionSelect
                defaultValue={dimensionFilters[dimensionName]}
                dimensions={dimensions[dimensionName]}
                onChange={dimensionId => {
                  this.setState((state, props) => ({
                    dimensionFilters: Object.assign(
                      {},
                      state.dimensionFilters,
                      {
                        [dimensionName]: dimensions[dimensionName].find(
                          uom => uom.id === dimensionId
                        ).name,
                      }
                    ),
                  }))
                }}
              />
              <Divider />
            </>
          )
        })}

        <ResponsiveContainer width="100%" height={600}>
          <LineChart
            data={processedData}
            margin={{
              top: 30,
              right: 30,
              left: 30,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={entry => dayjs(entry.date).format("MMM 'YY")} />
            <YAxis />
            <Tooltip formatter={formatNumbers} />
            <Legend />

            {dimensions['Geography'].map((dimension, index) => {
              const dimensionName = dimension.name
              return (
                <Line
                  type="natural"
                  dataKey={entry => {
                    return entry.values[dimensionName]
                  }}
                  name={dimensionName}
                  stroke={this.state.colors[index] || '#82ca9d'}
                />
              )
            })}
          </LineChart>
        </ResponsiveContainer>
        {/* <pre>{this.props.metadata}</pre> */}
      </div>
    )
  }
}
