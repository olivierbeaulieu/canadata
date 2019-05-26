import { cloneDeep } from 'lodash'

/**
 * Takes an array of IDimensionValues and nests them into their
 * children property, based on the parentId value they have.
 */
export default function nestDimensionValues(
  dimensionValues: IDimensionValue[]
): IDimensionValue[] {
  const output = []
  const mapById = {} // Hashtable used to retrieve dimensionValues more efficiently

  dimensionValues.forEach(dimensionValue => {
    const dimensionValueCopy = cloneDeep(dimensionValue)
    const { id, parentId } = dimensionValueCopy

    mapById[id] = dimensionValueCopy

    // parentId can be '', false or 0, this is intentional
    if (!parentId) {
      output.push(dimensionValueCopy)
    } else {
      mapById[parentId].children.push(dimensionValueCopy)
    }
  })

  return output
}
