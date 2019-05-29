import React from 'react'
import { TreeSelect } from 'antd'
import nestDimensionValues from '../utils/nest-dimensions'
import slugify from 'underscore.string/slugify'

export default function DimensionSelect(props: {
  dimension: IDimension
  onChange: any
  value: number | number[]
  multiple?: boolean
}) {
  const { dimension, onChange, value, multiple } = props

  const nestedDimensionValues = nestDimensionValues(dimension.member)

  const getRecursiveTreeNode = ({
    dimensionValue,
  }: {
    dimensionValue: IDimensionMember
  }) => {
    const { memberId, memberNameEn, children } = dimensionValue

    return (
      <TreeSelect.TreeNode
        key={`select-option-${slugify(memberNameEn)}-${memberId}`}
        value={memberId}
        title={memberNameEn}
      >
        {children.map(childDimensionValue => {
          return getRecursiveTreeNode({ dimensionValue: childDimensionValue })
        })}
      </TreeSelect.TreeNode>
    )
  }

  return (
    <TreeSelect
      key={`select-option-${dimension.dimensionNameEn}`}
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
