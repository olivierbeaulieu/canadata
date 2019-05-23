interface IDimension {
  id: string
  parentId: string
  name: string
  children: IDimension[]
}

interface IDimensionsDict {
  [key: string]: IDimension[]
}
