import React from 'react'
import Title from 'antd/lib/typography/Title'
import slugify from 'underscore.string/slugify'
import { formatNumbers } from '../utils/format'

export default function GraphTooltip(props: {
  active: boolean
  payload: any
  label: string
}) {
  const { active, payload, label } = props

  if (!active || !payload) return null

  // Sort in decreasing order
  payload.sort((a, b) => {
    return Number(b.value) - Number(a.value)
  })

  return (
    <div className="chart-tooltip">
      <Title level={4}>{label}</Title>
      <>
        {payload.map(entry => {
          return (
            <p key={`chart-tooltip-entry-${slugify(entry.name)}`}>
              {entry.name}: {formatNumbers(entry.value)}
            </p>
          )
        })}
      </>
    </div>
  )
}
