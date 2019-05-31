import { pull } from 'lodash'
import dayjs from 'dayjs'

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

export function formatDateByFrequencyCode(
  datestring: string,
  frequencyCode: FrequencyCode
): string {
  const date = dayjs(datestring)
  /*
   * List of all possible frequency codes:
   * 1: Daily
   * 11: Semi-annual
   * 12: Annual
   * 13: Every 2 years
   * 14: Every 3 years
   * 15: Every 4 years
   * 16: Every 5 years
   * 17: Every 10 years
   * 18: Occasional
   * 19: Occasional Quarterly
   * 2: Weekly
   * 20: Occasional Monthly
   * 21: Occasional Daily
   * 4: Biweekly
   * 6: Monthly
   * 7: Bimonthly
   * 9: Quarterly
   */
  switch (frequencyCode) {
    // Annually
    case 12:
      return date.format('YYYY')

    default:
      return date.format("MMM 'YY")
  }
}
