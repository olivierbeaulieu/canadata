import React from 'react'
import { TreeSelect } from 'antd'
import { TreeSelectProps } from 'antd/lib/tree-select/interface'
import nestDimensionValues from '../utils/nest-dimensions'
import slugify from 'underscore.string/slugify'

interface IProps {
  dimension: Dimension
  value: number | number[]
  onChange: (ChangeEvent) => void
  multiple: boolean
}

export default function DimensionSelect(props: IProps) {
  const { dimension, onChange, value, multiple } = props

  const nestedDimensionValues = nestDimensionValues(dimension.member)

  const getRecursiveTreeNode = ({
    dimensionValue,
  }: {
    dimensionValue: DimensionMember
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
      onChange={onChange}
      treeDefaultExpandAll={true}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      dropdownMatchSelectWidth={false}
      // treeCheckable={true}
      // treeCheckStrictly={true}
    >
      {nestedDimensionValues.map(dimension =>
        getRecursiveTreeNode({ dimensionValue: dimension })
      )}
    </TreeSelect>
  )
}
