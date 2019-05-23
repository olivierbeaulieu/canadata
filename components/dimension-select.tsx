import React from 'react'
import { Select } from 'antd'

export default function DimensionSelect(options: {
  dimensionsGroupName: string
  dimensionsGroup: Dimension[]
  onChange: any
  defaultValue: string
}) {
  const {
    dimensionsGroup,
    dimensionsGroupName,
    onChange,
    defaultValue,
  } = options

  return (
    <Select
      key={`select-option-${dimensionsGroupName}`}
      defaultValue={defaultValue}
      dropdownMatchSelectWidth={false}
      onChange={onChange}
    >
      {dimensionsGroup.map(dimension => (
        <Select.Option
          key={`select-option-${dimension.name}-${dimension.id}`}
          value={dimension.id}
        >
          {dimension.name}
        </Select.Option>
      ))}
    </Select>
  )
}
