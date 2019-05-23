import React from 'react'
import { TreeSelect } from 'antd'
import nestDimensions from '../utils/nest-dimensions'
import slugify from 'underscore.string/slugify'

export default function DimensionSelect(options: {
  dimensionsGroupName: string
  dimensionsGroup: IDimension[]
  onChange: any
  value: string
}) {
  const { dimensionsGroup, dimensionsGroupName, onChange, value } = options

  const nestedDimensions = nestDimensions(dimensionsGroup)

  const getRecursiveTreeNode = ({ dimension }: { dimension: IDimension }) => {
    return (
      <TreeSelect.TreeNode
        key={`select-option-${slugify(dimension.name)}-${dimension.id}`}
        value={dimension.id}
        title={dimension.name}
      >
        {dimension.children.map(childDimension => {
          return getRecursiveTreeNode({ dimension: childDimension })
        })}
      </TreeSelect.TreeNode>
    )
  }

  return (
    <TreeSelect
      key={`select-option-${dimensionsGroupName}`}
      value={value}
      treeDefaultExpandAll={true}
      dropdownMatchSelectWidth={false}
      onChange={onChange}
    >
      {nestedDimensions.map(dimension => getRecursiveTreeNode({ dimension }))}
    </TreeSelect>
  )
}
