import React from 'react'
import Link from 'next/link'

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
]

export default class IndexPage extends React.Component<IProps> {
  public render(): React.ReactNode {
    return (
      <div>
        <ul>
          {config.map(entry => (
            <li key={`index-chart-link-${entry.cubeId}`}>
              <Link href={`/chart/${entry.cubeId}`}>{entry.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
