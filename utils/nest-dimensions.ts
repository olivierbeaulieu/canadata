import { cloneDeep } from 'lodash'

/**
 * Takes an array of IDimensionValues and nests them into their
 * children property, based on the parentId value they have.
 */
export default function nestDimensionValues(
  dimensionValues: IDimensionValue[]
): IDimensionValue[] {
  const output = []
  const mapById = []

  const clonedDimensionValues = cloneDeep(dimensionValues)

  // Create a flat structure based on the values' id
  clonedDimensionValues.forEach(value => {
    mapById[value.id] = value
  })

  // Insert each item in it's parent's children array
  clonedDimensionValues.forEach(value => {
    const { parentId } = value

    if (parentId === null) {
      output.push(value)
    } else {
      mapById[parentId].children.push(value)
    }
  })

  return output
}
