import React from 'react'
import Title from 'antd/lib/typography/title'
import slugify from 'underscore.string/slugify'
import { formatNumbers } from '../utils/format'

export default function GraphTooltip(args: {
  active: boolean
  payload: any
  label: string
}) {
  const { active, payload, label } = args

  if (!active || !payload) return null

  payload.sort((a, b) => {
    return Number(b.value) - Number(a.value)
  })

  return (
    <div className="graph-tooltip">
      <Title level={4}>{label}</Title>
      <>
        {payload.map(entry => {
          return (
            <p key={`graph-tooltip-entry-${slugify(entry.name)}`}>
              {entry.name}: {formatNumbers(entry.value)}
            </p>
          )
        })}
      </>
    </div>
  )
}
