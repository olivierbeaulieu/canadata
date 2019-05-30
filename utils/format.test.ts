import { coordinatesToText, simplifyCoordinates } from './format'

function getDimensionWithProps(props: {} = {}): Dimension {
  return Object.assign(
    {
      dimensionNameEn: 'foo',
      dimensionNameFr: 'bar',
      dimensionPositionId: 1,
      hasUom: false,
      member: [],
    },
    props
  )
}

function getDimensionMemberWithProps(props: {} = {}): DimensionMember {
  return Object.assign(
    {
      memberId: 1,
      memberNameEn: 'foobar',
      parentMemberId: null,
      children: [],
    },
    props
  )
}

test('coordinatesToText returns the proper string when given a single dimension', () => {
  const coords = '1.0.0.0.0.0.0.0.0.0'
  const dimensionsDict = {
    1: getDimensionWithProps({
      dimensionNameEn: 'Geography',
      member: [
        getDimensionMemberWithProps({
          memberId: 1,
          memberNameEn: 'Canada',
        }),
      ],
    }),
  }

  const result = coordinatesToText(coords, dimensionsDict)

  expect(result).toEqual('Canada')
})

test('coordinatesToText returns the proper string when given multiple members in a dimension', () => {
  const coords = '1.0.1.0.0.0.0.0.0.0'
  const dimensionsDict = {
    1: getDimensionWithProps({
      dimensionNameEn: 'Geography',
      member: [
        getDimensionMemberWithProps({
          memberId: 1,
          memberNameEn: 'Canada',
        }),
        getDimensionMemberWithProps({
          memberId: 2,
          memberNameEn: 'Alberta',
        }),
      ],
    }),
    2: getDimensionWithProps({
      dimensionNameEn: 'Foo',
      member: [
        getDimensionMemberWithProps({
          memberId: 1,
          memberNameEn: 'Baz',
        }),
      ],
    }),
    3: getDimensionWithProps({
      dimensionNameEn: 'Foo',
      member: [
        getDimensionMemberWithProps({
          memberId: 1,
          memberNameEn: 'Bar',
        }),
      ],
    }),
  }

  const result = coordinatesToText(coords, dimensionsDict)

  expect(result).toEqual('Canada, Bar')
})

test('coordinatesToText returns the proper string when given multiple dimensions', () => {
  const coords = '1.1.0.0.0.0.0.0.0.0'
  const dimensionsDict = {
    1: getDimensionWithProps({
      dimensionNameEn: 'Geography',
      member: [
        getDimensionMemberWithProps({
          memberId: 1,
          memberNameEn: 'Canada',
        }),
      ],
    }),

    2: getDimensionWithProps({
      dimensionNameEn: 'Count',
      member: [
        getDimensionMemberWithProps({
          memberId: 1,
          memberNameEn: 'Citizens',
        }),
      ],
    }),
  }

  const result = coordinatesToText(coords, dimensionsDict)

  expect(result).toEqual('Canada, Citizens')
})

test('simplifyCoordinates should zero out values that are the same and keep the ones that are different', () => {
  const result = simplifyCoordinates(['1.1.1.0.0.0', '1.1.2.0.0.0'])

  expect(result[0]).toEqual('1.0.1.0.0.0')
  expect(result[1]).toEqual('1.0.2.0.0.0')
})

test('simplifyCoordinates should not zero out the first coordinate if there is only one coordinate', () => {
  const result = simplifyCoordinates(['1.1.1.0.0.0'])

  expect(result[0]).toEqual('1.0.0.0.0.0')
})
