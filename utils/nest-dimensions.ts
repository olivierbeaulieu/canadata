import { cloneDeep } from 'lodash'

export default function nestDimensions(dimensions: IDimension[]): IDimension[] {
  const output = []
  const dimensionsMapById = {}

  dimensions.forEach(dimension => {
    const dimensionCopy = cloneDeep(dimension)
    dimensionsMapById[dimension.id] = dimensionCopy

    // '', false or 0, intentional
    if (!dimension.parentId) {
      output.push(dimensionCopy)
    } else {
      dimensionsMapById[dimension.parentId].children.push(dimensionCopy)
    }
  })

  return output
}
