import React from 'react'
import randomColor from 'randomcolor'
import ChartTooltip from './chart-tooltip'
import { getUomById } from '../utils/codesets'

import {
  formatNumbers,
  coordinatesToText,
  simplifyCoordinates,
  formatDateByFrequencyCode,
} from '../utils/format'

import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  LineChart,
} from 'recharts'

const colors = randomColor({
  count: 100,
  luminosity: 'dark',
})

type Props = {
  uomId: number
  data: DataPoint[]
  dimensions: DimensionsDict
  frequencyCode: FrequencyCode
  type: ChartType
}

export default function Graph(props: Props): React.ReactElement {
  const { type, data, dimensions, frequencyCode, uomId } = props

  if (data.length === 0) {
    console.error('Cannot render chart: Data length is zero.')
    return null
  }

  const uom = getUomById(uomId)

  let ChartView, ChartChildView

  switch (type) {
    case 'area':
      ChartView = AreaChart
      ChartChildView = Area
      break

    default:
      ChartView = LineChart
      ChartChildView = Line
      break
  }

  const coords = Object.keys(data[0].values)
  const simplifiedCoords = simplifyCoordinates(coords)

  return (
    <ResponsiveContainer width="100%" height={600}>
      <ChartView
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 0,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey={(entry: DataPoint): string => {
            return formatDateByFrequencyCode(entry.date, frequencyCode)
          }}
        />

        {/* Axis only to display the text on the left side */}
        <YAxis yAxisId="yAxisLeft" axisLine={false} ticks={[]}>
          <Label
            value={uom.memberUomEn}
            position="insideLeft"
            angle={-90}
            style={{ textAnchor: 'middle' }}
          />
        </YAxis>

        {/* Axis to display the ticks on the right side */}
        <YAxis
          yAxisId="yAxisRight"
          tickFormatter={formatNumbers}
          orientation="right"
        />

        <Tooltip
          content={props => {
            if (props.active) {
              // Convert coordinates to strings
              props.payload.map((entry, index) => {
                entry.name = coordinatesToText(
                  simplifiedCoords[index],
                  dimensions
                )
              })
              return <ChartTooltip {...props} />
            }
          }}
        />

        <Legend
          iconType="line"
          formatter={(value, entry, index) =>
            coordinatesToText(simplifiedCoords[index], dimensions)
          }
        />

        {Object.keys(data[0].values).map((coordinates, index) => {
          const color = colors[index] || '#82ca9d'

          return (
            <ChartChildView
              yAxisId="yAxisRight"
              type="natural"
              name={coordinates}
              key={`line-${coordinates}`}
              stroke={color}
              fill={color}
              fillOpacity={0.5}
              dataKey={entry => entry.values[coordinates]}
            />
          )
        })}
      </ChartView>
    </ResponsiveContainer>
  )
}
