type DimensionFilters = {
  [key: number]: number[]
}

type Dimension = {
  dimensionNameEn: string
  dimensionNameFr: string
  dimensionPositionId: number
  hasUom: boolean
  member: DimensionMember[]
}

type DimensionMember = {
  classificationCode?: string
  classificationTypeCode?: string
  geoLevel?: number
  memberId: number
  memberNameEn: string
  memberNameFr?: string
  memberUomCode?: number
  parentMemberId: number
  terminated?: number
  vintage?: number
  children?: DimensionMember[]
}

type DimensionsDict = {
  [key: number]: Dimension
}

type DimensionsByIdDict = {
  [key: string]: { [key: string]: DimensionMember }
}

type DataPoint = {
  date: string
  values: { [key: string]: number }
}

type CubeMetadata = {
  archiveStatusCode: string
  archiveStatusEn: string
  archiveStatusFr: string
  cansimId: string
  correction?: any
  cubeEndDate: string
  cubeStartDate: string
  cubeTitleEn: string
  cubeTitleFr: string
  dimension: Dimension[]
  footnote: {
    footnoteId: number
    footnotesEn: string
    footnotesFr: string
    link: {
      dimensionPositionId: number
      footnoteId: number
      memberId: number
    }[]
  }[]
  frequencyCode: FrequencyCode
  nbDatapointsCube: number
  nbSeriesCube: number
  productId: string
  releaseTime: string
  responseStatusCode: number
  subjectCode: string[]
  surveyCode: string[]
}

type RawDataPoint = {
  GEO: string
  REF_DATE: string
  VALUE: string
  UOM: string
  UOM_ID: string
  coords: number[]
  COORDINATE: string
}

type ChartType = 'area' | 'line'

type FrequencyCode =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21

type VectorData = {
  coordinate: string
  productId: number
  responseStatusCode: number
  vectorDataPoint: VectorDataPoint[]
  vectorId: number
}

type VectorDataPoint = {
  refPer: string
  refPer2: string
  value: number
  decimals: number
  scalarFactorCode: number
  symbolCode: number
  statusCode: number
  securityLevelCode: number
  releaseTime: string
  frequencyCode: number
}
