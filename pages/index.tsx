import React from 'react'
import dayjs from 'dayjs'
import Title from 'antd/lib/typography/title'
import randomColor from 'randomcolor'
import { Divider } from 'antd'
import DimensionSelect from '../components/dimension-select'
import slugify from 'underscore.string/slugify'
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

interface IDataEntry {
  GEO: string
  REF_DATE: string
  VALUE: string
  UOM: string
}

interface IDataPoint {
  date: string
  values: { [key: string]: number }
}

interface IProps {
  data: IDataEntry[]
  metadata: string
}

interface IState {
  metadata: Array<{}>
  dimensions: IDimensionsDict
  frequency: string
  dimensionFilters: {
    [key: string]: string
  }
  colors: string[]
}

function CustomTooltip(args: { active: boolean; payload: any; label: string }) {
  const { active, payload, label } = args

  if (!active || !payload) return null

  payload.sort((a, b) => {
    return Number(b.value) - Number(a.value)
  })

  return (
    <div className="graph-tooltip">
      <Title level={4}>{label}</Title>
      <>
        {payload.map(entry => {
          return (
            <p key={`graph-tooltip-entry-${slugify(entry.name)}`}>
              {entry.name}: {formatNumbers(entry.value)}
            </p>
          )
        })}
      </>
    </div>
  )
}

function getLineDataKey(dimensionName: string) {
  return entry => {
    return entry.values[dimensionName]
  }
}

export default class IndexPage extends React.Component<IProps, IState> {
  private static getInitialProps({ query }: { query: IProps }) {
    const { data, metadata } = query

    return {
      data,
      metadata,
    }
  }

  public props: IProps
  public state: IState

  constructor(props: IProps) {
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
        count: dimensions.Geography.length,
        luminosity: 'dark',
      }),
    }

    this.getXAxisDataKey = this.getXAxisDataKey.bind(this)
    this.getOnDimensionSelectChange = this.getOnDimensionSelectChange.bind(this)
  }

  private getXAxisDataKey(entry: IDataPoint): string {
    const date = dayjs(entry.date)

    switch (this.state.frequency) {
      case 'Annual':
        return date.format('YYYY')

      default:
        return date.format("MMM 'YY")
    }
  }

  private getOnDimensionSelectChange(
    dimensions: IDimensionsDict,
    dimensionName: string
  ): (dimensionId: string) => void {
    return (dimensionId: string) => {
      this.setState((state, props) => ({
        dimensionFilters: Object.assign({}, state.dimensionFilters, {
          [dimensionName]: dimensions[dimensionName].find(
            uom => uom.id === dimensionId
          ).name,
        }),
      }))
    }
  }

  private processData(data: IDataEntry[]): IDataPoint[] {
    const processedData = []
    let current: any = null

    for (const entry of data) {
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

  private getTitleFromMetadata(metadata): string {
    return metadata[0][0]['Cube Title']
  }
  private getProductIdFromMetadata(metadata): string {
    return metadata[0][0]['Product Id']
  }
  private getFrequencyFromMetadata(metadata): string {
    return metadata[0][0].Frequency
  }
  private getDimensionsFromMetadata(metadata): IDimensionsDict {
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
        children: [],
      })
    })

    return dimensions
  }

  public render(): React.ReactNode {
    const { metadata, dimensions, dimensionFilters } = this.state

    const data = this.props.data.filter(entry => {
      const dimensionNames = Object.keys(dimensionFilters)
      let match = true

      dimensionNames.forEach(dimensionName => {
        if (entry[dimensionName] !== dimensionFilters[dimensionName]) {
          match = false
        }
      })

      return match
    })

    const processedData = this.processData(data)

    return (
      <div>
        <Title level={2}>{this.getTitleFromMetadata(metadata)}</Title>
        <Divider />

        {Object.keys(dimensionFilters).map(filterName => {
          return (
            <React.Fragment key={`dimension-filter-group-${filterName}`}>
              <Title level={3}>{filterName}</Title>
              <DimensionSelect
                value={dimensionFilters[filterName]}
                dimensionsGroupName={filterName}
                dimensionsGroup={dimensions[filterName]}
                onChange={this.getOnDimensionSelectChange(
                  dimensions,
                  filterName
                )}
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
            <XAxis dataKey={this.getXAxisDataKey} />
            <YAxis tickFormatter={formatNumbers} />
            <Tooltip content={CustomTooltip} formatter={formatNumbers} />
            <Legend />

            {dimensions.Geography.map((dimension, index) => {
              const dimensionName = dimension.name
              return (
                <Line
                  type="natural"
                  strokeWidth={2}
                  key={`line-${dimensionName}`}
                  dataKey={getLineDataKey(dimensionName)}
                  name={dimensionName}
                  stroke={this.state.colors[index] || '#82ca9d'}
                />
              )
            })}
          </LineChart>
        </ResponsiveContainer>
        {/* <pre>{JSON.stringify(this.state.metadata, null, 4)}</pre> */}
      </div>
    )
  }
}
