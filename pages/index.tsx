import React from 'react'
import dayjs from 'dayjs'
import PageHeader from '@atlaskit/page-header'
import Page, { Grid, GridColumn } from '@atlaskit/page'

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

interface DataEntry {
  GEO: string
  REF_DATE: string
  VALUE: string
  UOM: string
}

export default class IndexPage extends React.Component {
  props: {
    jsonData: DataEntry[]
  }

  static getInitialProps({ query }) {
    const { jsonData } = query

    return {
      jsonData,
    }
  }

  processData(data: DataEntry[]) {
    const processedData = []
    const seriesLabels = {}
    let current = null

    for (let entry of data) {
      if (current === null || current.date !== entry.REF_DATE) {
        // Create a new entry
        current = {
          date: entry.REF_DATE,
          values: {},
        }
        processedData.push(current)
      }

      seriesLabels[entry.GEO] = 1
      current.values[entry.GEO] = Number(entry.VALUE)
    }

    return {
      seriesLabels: Object.keys(seriesLabels),
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

    const formatNumbers = value => new Intl.NumberFormat('en').format(value)
    const { processedData, seriesLabels } = this.processData(data)
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
      <Page>
        <PageHeader>Crude Oil Production in Barrels</PageHeader>

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

            {seriesLabels.map((label, index) => (
              <Line
                type="monotone"
                dataKey={entry => entry.values[label]}
                name={label}
                stroke={colors[index] || '#82ca9d'}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>

        <pre>{JSON.stringify(processedData, null, '\t')}</pre>
      </Page>
    )
  }
}
