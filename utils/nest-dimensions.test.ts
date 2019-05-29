import nestDimensionValues from './nest-dimensions'

test('should properly convert a flat structure to a nested structure', () => {
  const dimensionsArray = [
    {
      name: 'Grandchild',
      id: 11,
      parentId: 13,
      children: [],
    },
    {
      name: 'Grandchild',
      id: 12,
      parentId: 13,
      children: [],
    },
    {
      name: 'Child',
      id: 13,
      parentId: 15,
      children: [],
    },
    {
      name: 'Child',
      id: 14,
      parentId: 15,
      children: [],
    },
    {
      name: 'Parent',
      id: 15,
      parentId: null,
      children: [],
    },
  ]

  const result = nestDimensionValues(dimensionsArray)

  expect(result).toHaveLength(1)
  expect(result[0]).toHaveProperty('id', 15)
  expect(result[0].children).toHaveLength(2)
  expect(result[0].children[0]).toHaveProperty('id', 13)
  expect(result[0].children[0].children).toHaveLength(2)
  expect(result[0].children[0].children[0]).toHaveProperty('id', 11)
  expect(result[0].children[0].children[0].children).toHaveLength(0)
  expect(result[0].children[0].children[1]).toHaveProperty('id', 12)
  expect(result[0].children[0].children[1].children).toHaveLength(0)
  expect(result[0].children[1]).toHaveProperty('id', 14)
  expect(result[0].children[1].children).toHaveLength(0)
})

test('should not modify the initial array', () => {
  const dimensionsArray = [
    {
      name: 'Taxes on incomes',
      id: 2,
      parentId: 1,
      children: [],
    },
    {
      name: 'General governments revenue',
      id: 1,
      parentId: null,
      children: [],
    },
  ]

  nestDimensionValues(dimensionsArray)

  expect(dimensionsArray[0].children).toHaveLength(0)
})

test('should not depend on the ordering of the dimension array', () => {
  const dimensionsArray = [
    {
      name: 'General governments revenue',
      id: 1,
      parentId: null,
      children: [],
    },
    {
      name: 'Taxes on incomes',
      id: 2,
      parentId: 1,
      children: [],
    },
  ]

  nestDimensionValues(dimensionsArray)

  expect(dimensionsArray[0].children).toHaveLength(0)
})
