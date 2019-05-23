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
  frequency: string
  dimensionFilters: {
    [key: string]: string
  }
  colors: string[]
}

const DimensionSelect = (options: {
  dimensionsGroupName: string
  dimensionsGroup: Dimension[]
  onChange: any
  defaultValue: string
}) => {
  const {
    dimensionsGroup,
    dimensionsGroupName,
    onChange,
    defaultValue,
  } = options

  return (
    <Select
      key={`select-option-${dimensionsGroupName}`}
      defaultValue={defaultValue}
      dropdownMatchSelectWidth={false}
      onChange={onChange}
    >
      {dimensionsGroup.map(dimension => (
        <Select.Option
          key={`select-option-${dimension.name}-${dimension.id}`}
          value={dimension.id}
        >
          {dimension.name}
        </Select.Option>
      ))}
    </Select>
  )
}

const CustomTooltip = (args: {
  active: boolean
  payload: any
  label: string
}) => {
  const { active, payload, label } = args

  payload &&
    payload.sort((a, b) => {
      return Number(b.value) - Number(a.value)
    })

  if (active) {
    return (
      <div className="graph-tooltip">
        <Title level={4}>{label}</Title>
        <>
          {payload.map(entry => {
            return (
              <p>
                {entry.name}: {formatNumbers(entry.value)}
              </p>
            )
          })}
        </>
      </div>
    )
  }

  return null
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
      frequency: this.getFrequencyFromMetadata(metadata),
      colors: randomColor({
        count: dimensions['Geography'].length,
        luminosity: 'dark',
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
  getFrequencyFromMetadata(metadata): string {
    return metadata[0][0]['Frequency']
  }
  getDimensionsFromMetadata(metadata): DimensionsDict {
    const dimensions = {}
    const dimensionsById = []

    metadata[1].forEach(entry => {
      const id = entry['Dimension ID']
      const name = entry['Dimension name']
      dimensions[name] = dimensionsById[id] = []
    })

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
      const dimensionNames = Object.keys(dimensionFilters)
      let match = true

      dimensionNames.forEach(dimensionName => {
        if (entry[dimensionName] !== dimensionFilters[dimensionName])
          match = false
      })

      return match
    })

    const processedData = this.processData(data)

    return (
      <div>
        <Title level={2}>{this.getTitleFromMetadata(metadata)}</Title>
        <Divider />

        {Object.keys(dimensionFilters).map(dimensionName => {
          return (
            <React.Fragment key={`dimension-filter-group-${dimensionName}`}>
              <Title level={3}>{dimensionName}</Title>
              <DimensionSelect
                defaultValue={dimensionFilters[dimensionName]}
                dimensionsGroupName={dimensionName}
                dimensionsGroup={dimensions[dimensionName]}
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
            </React.Fragment>
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
            <XAxis
              dataKey={entry => {
                const date = dayjs(entry.date)

                switch (this.state.frequency) {
                  case 'Annual':
                    return date.format('YYYY')

                  default:
                    return date.format("MMM 'YY")
                }
              }}
            />
            <YAxis tickFormatter={formatNumbers} />
            <Tooltip content={CustomTooltip} formatter={formatNumbers} />
            <Legend />

            {dimensions['Geography'].map((dimension, index) => {
              const dimensionName = dimension.name
              return (
                <Line
                  type="natural"
                  strokeWidth={2}
                  key={`line-${dimensionName}`}
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
        <pre>{JSON.stringify(this.state.metadata, null, 4)}</pre>
      </div>
    )
  }
}
