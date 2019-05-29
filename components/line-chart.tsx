import React from 'react'
import randomColor from 'randomcolor'
import dayjs from 'dayjs'
import GraphTooltip from './graph-tooltip'
import { formatNumbers } from '../utils/format'
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

function getLineDataKey(dimensionName: string) {
  return entry => {
    return entry.values[dimensionName]
  }
}

function getXAxisDataKey(frequencyCode: number, entry: IDataPoint): string {
  const date = dayjs(entry.date)
  /*
   * List of all possible frequency codes:
   * 1: Daily
   * 11: Semi-annual
   * 12: Annual
   * 13: Every 2 years
   * 14: Every 3 years
   * 15: Every 4 years
   * 16: Every 5 years
   * 17: Every 10 years
   * 18: Occasional
   * 19: Occasional Quarterly
   * 2: Weekly
   * 20: Occasional Monthly
   * 21: Occasional Daily
   * 4: Biweekly
   * 6: Monthly
   * 7: Bimonthly
   * 9: Quarterly
   */
  switch (frequencyCode) {
    // Annually
    case 12:
      return date.format('YYYY')

    default:
      // console.log('frequencyCode', frequencyCode)
      return date.format("MMM 'YY")
  }
}

const colors = randomColor({
  count: 100,
  luminosity: 'dark',
})

export default function Graph(props: {
  data: IDataPoint[]
  dimensions: IDimensionsDict
  frequencyCode: number
}): React.ReactElement {
  const { data, dimensions, frequencyCode } = props

  return (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 30,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={getXAxisDataKey.bind(null, frequencyCode)} />
        <YAxis tickFormatter={formatNumbers} />
        <Tooltip content={GraphTooltip} formatter={formatNumbers} />
        <Legend />

        {dimensions[1].member.map((dimensionValue, index) => (
          <Line
            type="natural"
            strokeWidth={2}
            key={`line-${dimensionValue.memberNameEn}`}
            dataKey={getLineDataKey(dimensionValue.memberNameEn)}
            name={dimensionValue.memberNameEn}
            stroke={colors[index] || '#82ca9d'}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
