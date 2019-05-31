import React, { ChangeEvent } from 'react'
import { Drawer, Radio, Icon } from 'antd'

type Props = {
  selected: ChartType
  onChange: (ChangeEvent) => void
}

const config = [
  {
    type: 'line',
    icon: 'line-chart',
    text: 'Line',
  },
  {
    type: 'area',
    icon: 'area-chart',
    text: 'Area',
  },
]

export default function ChartTypeSelect(props: Props) {
  const { selected, onChange } = props

  return (
    <Radio.Group value={selected} onChange={onChange}>
      {config.map(entry => (
        <Radio.Button
          key={`chart-type-select-${entry.type}`}
          value={entry.type}
        >
          <Icon type={entry.icon} />
          &nbsp;{entry.text}
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}
