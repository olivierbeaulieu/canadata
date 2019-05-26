import nestDimensionValues from './nest-dimensions'

test('should properly convert a flat structure to a nested structure', () => {
  const dimensionsArray = [
    {
      name: 'General governments revenue',
      id: '1',
      parentId: '',
      children: [],
    },
    {
      name: 'Taxes on incomes',
      id: '2',
      parentId: '1',
      children: [],
    },
    {
      name: 'From households',
      id: '3',
      parentId: '2',
      children: [],
    },
    {
      name: 'From households',
      id: '4',
      parentId: '2',
      children: [],
    },
  ]

  const result = nestDimensionValues(dimensionsArray)

  expect(result).toHaveLength(1)
  expect(result[0]).toHaveProperty('id', '1')
  expect(result[0].children).toHaveLength(1)
  expect(result[0].children[0]).toHaveProperty('id', '2')
  expect(result[0].children[0].children).toHaveLength(2)
  expect(result[0].children[0].children[0]).toHaveProperty('id', '3')
  expect(result[0].children[0].children[0].children).toHaveLength(0)
  expect(result[0].children[0].children[1]).toHaveProperty('id', '4')
  expect(result[0].children[0].children[1].children).toHaveLength(0)
})

test('should not modifying the initial array', () => {
  const dimensionsArray = [
    {
      name: 'General governments revenue',
      id: '1',
      parentId: '',
      children: [],
    },
    {
      name: 'Taxes on incomes',
      id: '2',
      parentId: '1',
      children: [],
    },
  ]

  nestDimensionValues(dimensionsArray)

  expect(dimensionsArray[0].children).toHaveLength(0)
})
