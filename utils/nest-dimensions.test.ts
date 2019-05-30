import nestDimensionValues from './nest-dimensions'

test('should properly convert a flat structure to a nested structure', () => {
  const dimensionsArray: DimensionMember[] = [
    {
      memberNameEn: 'Grandchild',
      memberId: 11,
      parentMemberId: 13,
      children: [],
    },
    {
      memberNameEn: 'Grandchild',
      memberId: 12,
      parentMemberId: 13,
      children: [],
    },
    {
      memberNameEn: 'Child',
      memberId: 13,
      parentMemberId: 15,
      children: [],
    },
    {
      memberNameEn: 'Child',
      memberId: 14,
      parentMemberId: 15,
      children: [],
    },
    {
      memberNameEn: 'Parent',
      memberId: 15,
      parentMemberId: null,
      children: [],
    },
  ]

  const result = nestDimensionValues(dimensionsArray)

  expect(result).toHaveLength(1)
  expect(result[0]).toHaveProperty('memberId', 15)
  expect(result[0].children).toHaveLength(2)
  expect(result[0].children[0]).toHaveProperty('memberId', 13)
  expect(result[0].children[0].children).toHaveLength(2)
  expect(result[0].children[0].children[0]).toHaveProperty('memberId', 11)
  expect(result[0].children[0].children[0].children).toHaveLength(0)
  expect(result[0].children[0].children[1]).toHaveProperty('memberId', 12)
  expect(result[0].children[0].children[1].children).toHaveLength(0)
  expect(result[0].children[1]).toHaveProperty('memberId', 14)
  expect(result[0].children[1].children).toHaveLength(0)
})

test('should not modify the initial array', () => {
  const dimensionsArray = [
    {
      memberNameEn: 'Taxes on incomes',
      memberId: 2,
      parentMemberId: 1,
      children: [],
    },
    {
      memberNameEn: 'General governments revenue',
      memberId: 1,
      parentMemberId: null,
      children: [],
    },
  ]

  nestDimensionValues(dimensionsArray)

  expect(dimensionsArray[0].children).toHaveLength(0)
})

test('should not depend on the ordering of the dimension array', () => {
  const dimensionsArray = [
    {
      memberNameEn: 'General governments revenue',
      memberId: 1,
      parentMemberId: null,
      children: [],
    },
  ]

  nestDimensionValues(dimensionsArray)

  expect(dimensionsArray[0].children).toHaveLength(0)
})
