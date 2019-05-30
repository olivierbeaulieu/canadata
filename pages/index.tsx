import React from 'react'
import Link from 'next/link'
import { Card, Row, Col, Typography } from 'antd'

const { Title } = Typography
const config = [
  {
    cubeId: 36100450,
    title:
      'Revenus, dépenses et solde budgétaire - Administrations publiques, comptes économiques provinciaux et territoriaux (x 1 000 000)',
  },
  {
    cubeId: 25100063,
    title: 'Supply and disposition of crude oil and equivalent',
  },
  {
    cubeId: 24100045,
    title:
      'Travel by Canadian residents in Canada and abroad by trip purpose (x 1,000)',
  },
]

export default class IndexPage extends React.Component<IProps> {
  public render(): React.ReactNode {
    return (
      <div>
        <Row gutter={16}>
          {config.map(entry => (
            <Col span={12} key={`index-chart-link-${entry.cubeId}`}>
              <Card style={{ marginBottom: '12px' }}>
                <Title level={4}>
                  <Link href={`/chart/${entry.cubeId}`}>
                    <a>{entry.title}</a>
                  </Link>
                </Title>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
