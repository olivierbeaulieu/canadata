import React from 'react'
import dayjs from 'dayjs'
import Title from 'antd/lib/typography/title'
import { PageHeader, Select } from 'antd'
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

const colors = [
  '#EFA52E',
  '#02B1B6',
  '#FF0054',
  '#58D481',
  '#EE6352',
  '#23F0C7',
  '#EF767A',
  '#7D7ABC',
  '#6457A6',
  '#FFE347',
]

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

interface Props {
  data: DataEntry[]
  metadata: string
}

interface State {
  unitOfMeasure?: Dimension
}

export default class IndexPage extends React.Component<Props, State> {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)
    this.state = {}
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

  getTitleFromMetadata(metadata) {
    return metadata[0][0]['Cube Title']
  }
  getProductIdFromMetadata(metadata) {
    return metadata[0][0]['Product Id']
  }
  getDimensionsFromMetadata(metadata): { [key: string]: Dimension } {
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
    const metadata = JSON.parse(this.props.metadata)
    const dimensions = this.getDimensionsFromMetadata(metadata)
    const unitsOfMeasure = dimensions['Units of measure']

    const uom = this.state.unitOfMeasure || unitsOfMeasure[0]

    const data = this.props.data.filter(
      entry =>
        entry.UOM === uom.name &&
        // (entry.GEO === 'Alberta' || entry.GEO === 'Saskatchewan') &&
        entry['Supply and disposition'] === 'Crude oil production'
    )

    const processedData = this.processData(data)

    return (
      <div>
        <PageHeader
          // onBack={() => null}
          title={<Title level={2}>{this.getTitleFromMetadata(metadata)}</Title>}
          subTitle={`Product Id ${this.getProductIdFromMetadata(metadata)}`}
        />

        <Title level={3}>Units of measure</Title>
        <Select
          defaultValue={unitsOfMeasure[0].name}
          style={{ width: 180 }}
          onChange={dimensionId => {
            this.setState({
              unitOfMeasure: unitsOfMeasure.find(uom => uom.id === dimensionId),
            })
          }}
        >
          {unitsOfMeasure.map(dimension => (
            <Select.Option value={dimension.id}>{dimension.name}</Select.Option>
          ))}
        </Select>

        <ResponsiveContainer width={800} height={600}>
          <LineChart
            width={800}
            height={600}
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
                  stroke={colors[index] || '#82ca9d'}
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
