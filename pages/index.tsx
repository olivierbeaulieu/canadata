import React from 'react'
import dayjs from 'dayjs'
import Title from 'antd/lib/typography/title'
import { PageHeader } from 'antd'

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
// import { Props } from '@atlaskit/icon/glyph/app-switcher'

interface DataEntry {
  GEO: string
  REF_DATE: string
  VALUE: string
  UOM: string
}

// interface DataPoint {
//   date: string
//   values: {
//     [key: string]: number
//   }
// }

interface Props {
  jsonData: DataEntry[]
}

export default class IndexPage extends React.Component<Props> {
  static getInitialProps({ query }: { query: Props }) {
    const { jsonData } = query

    return {
      jsonData,
    }
  }

  processData(data: DataEntry[]) {
    const processedData = []
    const dimensions: {
      [key: string]: boolean
    } = {}
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

      dimensions[entry.GEO] = true
      current.values[entry.GEO] = Number(entry.VALUE)
    }

    return {
      dimensions: Object.keys(dimensions),
      processedData: processedData,
    }
  }

  render() {
    // TODO: merge in one loop
    const data = this.props.jsonData.filter(
      entry =>
        entry.UOM === 'Barrels' &&
        // (entry.GEO === 'Alberta' || entry.GEO === 'Saskatchewan') &&
        entry['Supply and disposition'] === 'Crude oil production'
    )

    const formatNumbers = (value: number) =>
      new Intl.NumberFormat('en').format(value)

    const { processedData, dimensions } = this.processData(data)
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

    return (
      <div>
        <PageHeader
          // onBack={() => null}
          title={<Title level={2}>Crude Oil Production</Title>}
          subTitle="In Barrels"
        />

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

            {dimensions.map((label, index) => (
              <Line
                type="monotone"
                dataKey={entry => entry.values[label]}
                name={label}
                stroke={colors[index] || '#82ca9d'}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        {/* <pre>{JSON.stringify(processedData, null, '\t')}</pre> */}
      </div>
    )
  }
}
