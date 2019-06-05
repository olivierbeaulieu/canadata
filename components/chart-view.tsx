import React from 'react'
import randomColor from 'randomcolor'
import ChartTooltip from './chart-tooltip'
import { getUomById } from '../utils/codesets'
import {
  formatNumbers,
  coordinatesToText,
  simplifyCoordinates,
  formatDateByFrequencyCode,
  scalarFactorCodeToText,
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

function groupDataByDate(
  vectorData: VectorData[]
): Array<{
  date: string
  values: {
    [coord: string]: number
  }
}> {
  const mapByDate: { [key: string]: { [key: string]: number } } = {}

  // Insert all data points in the object
  vectorData.forEach(vector => {
    vector.vectorDataPoint.forEach(vectorDataPoint => {
      if (!mapByDate[vectorDataPoint.refPer]) {
        mapByDate[vectorDataPoint.refPer] = {}
      }

      mapByDate[vectorDataPoint.refPer][vector.coordinate] =
        vectorDataPoint.value
    })
  })

  // Convert the object to an array
  return Object.keys(mapByDate).map(date => {
    return {
      date,
      values: mapByDate[date],
    }
  })
}

const colors = randomColor({
  count: 100,
  luminosity: 'dark',
})

type Props = {
  uomId: number
  data: VectorData[]
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
  let yAxisLabel = uom.memberUomEn
  const scalarFactor = scalarFactorCodeToText(
    data[0].vectorDataPoint[0].scalarFactorCode
  )

  if (scalarFactor) yAxisLabel += ` (${scalarFactor})`

  // Select the right views based on the user-selected chart type
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

  const coordinates = data.map(vector => vector.coordinate)
  const simplifiedCoords = simplifyCoordinates(coordinates)
  const dataByDate = groupDataByDate(data)

  return (
    <ResponsiveContainer width="100%" height={600}>
      <ChartView
        data={dataByDate}
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
            value={yAxisLabel}
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
            if (props.active && props.payload) {
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

        {data.map((vectorData, index) => {
          const color = colors[index] || '#82ca9d'

          return (
            <ChartChildView
              yAxisId="yAxisRight"
              type="natural"
              name={vectorData.coordinate}
              key={`line-${vectorData.coordinate}`}
              stroke={color}
              fill={color}
              fillOpacity={0.5}
              dataKey={entry => entry.values[vectorData.coordinate]}
            />
          )
        })}
      </ChartView>
    </ResponsiveContainer>
  )
}
