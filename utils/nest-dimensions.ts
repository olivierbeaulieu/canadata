import { cloneDeep } from 'lodash'

/**
 * Takes an array of IDimensionValues and nests them into their
 * children property, based on the parentMemberId value they have.
 */
export default function nestDimensionValues(
  dimensionMembers: DimensionMember[]
): DimensionMember[] {
  const output = []
  const mapById = []

  const clonedDimensionMembers = cloneDeep(dimensionMembers)

  // Create a flat structure based on the values' id
  clonedDimensionMembers.forEach(member => {
    mapById[member.memberId] = member
  })

  // Insert each item in it's parent's children array
  clonedDimensionMembers.forEach(member => {
    const { parentMemberId } = member

    if (parentMemberId === null) {
      output.push(member)
    } else {
      mapById[parentMemberId].children.push(member)
    }
  })

  return output
}
