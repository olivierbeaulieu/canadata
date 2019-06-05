import React from 'react'
import { Typography } from 'antd'
import { WaveSpinner } from 'react-spinners-kit'

const { Text } = Typography

type Props = {
  isLoading: boolean
  text?: string
}

export default function(props: Props): React.ReactElement {
  const { isLoading, text } = props

  if (!isLoading) return null

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '30px 0',
      }}
    >
      <WaveSpinner color="#0647a5" size={30} />
      <Text
        style={{
          marginTop: '10px',
        }}
      >
        {text || 'Loading...'}
      </Text>
    </div>
  )
}
