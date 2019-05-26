import React from 'react'
import Title from 'antd/lib/typography/title'
import slugify from 'underscore.string/slugify'
import randomColor from 'randomcolor'
import dayjs from 'dayjs'
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

function getXAxisDataKey(frequency: string, entry: IDataPoint): string {
  const date = dayjs(entry.date)

  switch (frequency) {
    case 'Annual':
      return date.format('YYYY')

    default:
      return date.format("MMM 'YY")
  }
}

const colors = randomColor({
  count: 100,
  luminosity: 'dark',
})

export default function Graph({
  data,
  dimensions,
  frequency,
}: {
  data: IDataPoint[]
  dimensions: IDimensionsDict
  frequency: string
}): React.ReactElement {
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
        <XAxis dataKey={getXAxisDataKey.bind(null, frequency)} />
        <YAxis tickFormatter={formatNumbers} />
        <Tooltip content={CustomTooltip} formatter={formatNumbers} />
        <Legend />

        {dimensions.Geography.map((dimension, index) => (
          <Line
            type="natural"
            strokeWidth={2}
            key={`line-${dimension.name}`}
            dataKey={getLineDataKey(dimension.name)}
            name={dimension.name}
            stroke={colors[index] || '#82ca9d'}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
