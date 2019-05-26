import React from 'react'
import { TreeSelect } from 'antd'
import nestDimensionValues from '../utils/nest-dimensions'
import slugify from 'underscore.string/slugify'

export default function DimensionSelect(options: {
  dimensionName: string
  dimensionValues: IDimensionValue[]
  onChange: any
  value: string | string[]
  multiple?: boolean
}) {
  const { dimensionValues, dimensionName, onChange, value, multiple } = options

  const nestedDimensionValues = nestDimensionValues(dimensionValues)

  const getRecursiveTreeNode = ({
    dimensionValue,
  }: {
    dimensionValue: IDimensionValue
  }) => {
    const { id, name, children } = dimensionValue

    return (
      <TreeSelect.TreeNode
        key={`select-option-${slugify(name)}-${id}`}
        value={id}
        title={name}
      >
        {children.map(childDimensionValue => {
          return getRecursiveTreeNode({ dimensionValue: childDimensionValue })
        })}
      </TreeSelect.TreeNode>
    )
  }

  return (
    <TreeSelect
      key={`select-option-${dimensionName}`}
      value={value}
      multiple={multiple}
      treeDefaultExpandAll={true}
      dropdownMatchSelectWidth={false}
      onChange={onChange}
    >
      {nestedDimensionValues.map(dimension =>
        getRecursiveTreeNode({ dimensionValue: dimension })
      )}
    </TreeSelect>
  )
}
