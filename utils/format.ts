import { pull } from 'lodash'

export function formatNumbers(value: number): string {
  return new Intl.NumberFormat('en').format(value)
}

export function coordinatesToText(
  coordinates: string,
  dimensions: DimensionsDict
): string {
  return coordinates
    .split('.')
    .map((coord, index) => {
      const coordinate = Number(coord)
      if (coordinate === 0) return null

      return dimensions[index + 1].member.find(member => {
        return member.memberId === coordinate
      }).memberNameEn
    })
    .filter(entry => !!entry)
    .join(', ')
}

export function simplifyCoordinates(coordinates: string[]): string[] {
  const coordsAsNumber = coordinates.map(coord => coord.split('.'))

  for (let i = 0; i < coordsAsNumber[0].length; i++) {
    const allNumbersAtIndex = coordsAsNumber.map(coord => coord[i])

    // If all numbers at a given index are identical, set them all to 0
    if (i > 0 && pull(allNumbersAtIndex, allNumbersAtIndex[0]).length === 0) {
      coordsAsNumber.forEach(coord => {
        coord[i] = '0'
      })
    }
  }

  return coordsAsNumber.map(coord => coord.join('.'))
}
