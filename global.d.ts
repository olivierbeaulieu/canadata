interface Dimension {
  id: number
  parentId: number
  name: string
}

interface DimensionsDict {
  [key: string]: Dimension[]
}
