import React from 'react'
import randomColor from 'randomcolor'
import dayjs from 'dayjs'
import ChartTooltip from './chart-tooltip'
import {
  formatNumbers,
  coordinatesToText,
  simplifyCoordinates,
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
import { getUomById } from '../utils/codesets'

function getDataKey(coordinates: string) {
  return entry => {
    return entry.values[coordinates]
  }
}

function getXAxisDataKey(frequencyCode: number, entry: DataPoint): string {
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
  data: DataPoint[]
  dimensions: DimensionsDict
  frequencyCode: number
  uomId: number
  type: ChartType
}): React.ReactElement {
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
        <XAxis dataKey={getXAxisDataKey.bind(null, frequencyCode)} />
        <YAxis yAxisId="yAxisLeft" axisLine={false} ticks={[]}>
          <Label
            value={uom.memberUomEn}
            position="insideLeft"
            angle={-90}
            style={{ textAnchor: 'middle' }}
          />
        </YAxis>
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
          formatter={(value, entry, index) => {
            return coordinatesToText(simplifiedCoords[index], dimensions)
          }}
        />

        {Object.keys(data[0].values).map((coordinates, index) => {
          const color = colors[index] || '#82ca9d'

          return (
            <ChartChildView
              yAxisId="yAxisRight"
              type="natural"
              key={`line-${coordinates}`}
              dataKey={getDataKey(coordinates)}
              name={coordinates}
              stroke={color}
              fillOpacity={0.5}
              fill={color}
            />
          )
        })}
      </ChartView>
    </ResponsiveContainer>
  )
}
