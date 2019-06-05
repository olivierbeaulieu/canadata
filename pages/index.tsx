import React from 'react'
import Link from 'next/link'
import { Tag, Card, Row, Col, Typography } from 'antd'

const { Title } = Typography
const config = [
  {
    cubeId: 36100450,
    title:
      'Revenus, dépenses et solde budgétaire - Administrations publiques, comptes économiques provinciaux et territoriaux (x 1 000 000)',
    tags: [{ text: 'Works', color: 'blue' }],
  },
  {
    cubeId: 25100063,
    title: 'Supply and disposition of crude oil and equivalent',
    tags: [{ text: 'Works', color: 'blue' }],
  },
  {
    cubeId: 24100045,
    title:
      'Travel by Canadian residents in Canada and abroad by trip purpose (x 1,000)',
    tags: [{ text: 'Works', color: 'blue' }],
  },
  {
    cubeId: 38100054,
    title: 'Environmental and clean technology employment, Canada and regions',
    tags: [{ text: 'Works', color: 'blue' }],
  },
  {
    cubeId: 39100007,
    title:
      'Life expectancy and other elements of the life table, Canada and provinces',
    tags: [{ text: 'Works', color: 'blue' }],
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
                {entry.tags &&
                  entry.tags.map((tag, index) => (
                    <Tag key={`${index}`} color={tag.color}>
                      {tag.text}
                    </Tag>
                  ))}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
