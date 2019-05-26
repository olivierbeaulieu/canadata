interface IDimensionValue {
  id: string
  parentId: string
  name: string
  children: IDimensionValue[]
}

interface IDimensionsDict {
  [key: string]: IDimensionValue[]
}

interface IDimensionsByIdDict {
  [key: string]: { [key: string]: IDimensionValue }
}

interface IDataPoint {
  date: string
  values: { [key: string]: number }
}
