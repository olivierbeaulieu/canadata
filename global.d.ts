interface IDimension {
  id: string
  parentId: string
  name: string
  children: IDimension[]
}

interface IDimensionsDict {
  [key: string]: IDimension[]
}

interface IDimensionsByIdDict {
  [key: string]: { [key: string]: IDimension }
}

interface IDataPoint {
  date: string
  values: { [key: string]: number }
}
