import React, { ChangeEvent } from 'react'
import { Divider, Drawer, Typography } from 'antd'
import ChartTypeSelect from './chart-type-select'
import DimensionSelect from './dimension-select'
import { getDimensionsFromMetadata } from '../utils/format'

const { Text } = Typography

type OnDimensionFilterChangeCallback = (
  filterId: string,
  filterValue: number[]
) => void

type Props = {
  isVisible: boolean
  onClose: () => void
  dimensions: DimensionsDict
  dimensionFilters: DimensionFilters
  chartType: ChartType
  onDimensionFilterChange: OnDimensionFilterChangeCallback
  onChartTypeChange: (type: ChartType) => void
}

export function FiltersView(props: Props): React.ReactElement {
  const {
    isVisible,
    onClose,
    chartType,
    dimensions,
    dimensionFilters,
    onDimensionFilterChange,
  } = props

  return (
    <Drawer
      title="Filters"
      placement="left"
      closable={true}
      onClose={onClose}
      visible={isVisible}
      width={300}
    >
      {getDimensionFilterSelects({
        dimensions,
        dimensionFilters,
        onChange: onDimensionFilterChange,
      })}
      <Text strong style={{ display: 'block', marginBottom: '5px' }}>
        Chart Type
      </Text>
      <ChartTypeSelect
        selected={chartType}
        onChange={(event: ChangeEvent) => {
          props.onChartTypeChange(event.target.value)
        }}
      />
    </Drawer>
  )
}

function getDimensionFilterSelects(props: {
  dimensionFilters: DimensionFilters
  dimensions: DimensionsDict
  onChange: OnDimensionFilterChangeCallback
}): React.ReactNode {
  const { dimensions, dimensionFilters } = props

  return Object.keys(dimensionFilters).map(dimensionId => {
    const isMultiple = true

    // If there are zero or one options, don't show the select
    if (dimensions[dimensionId].member.length <= 1) {
      return null
    }

    const select = (
      <DimensionSelect
        multiple={isMultiple}
        value={dimensionFilters[dimensionId]}
        dimension={dimensions[dimensionId]}
        onChange={value => {
          props.onChange(dimensionId, value)
          // this.setState(state => {
          //   const newValue = isMultiple ? value : [value]

          //   return {
          //     dimensionFilters: Object.assign({}, state.dimensionFilters, {
          //       [dimensionId]: newValue,
          //     }),
          //   }
          // })
        }}
      />
    )

    return (
      <React.Fragment key={`dimension-filter-group-${dimensionId}`}>
        <Text strong style={{ display: 'block', marginBottom: '5px' }}>
          {dimensions[dimensionId].dimensionNameEn}
        </Text>
        {select}
        <Divider />
      </React.Fragment>
    )
  })
}
