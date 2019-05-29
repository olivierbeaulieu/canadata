interface IDimension {
  dimensionNameEn: string
  dimensionNameFr: string
  dimensionPositionId: number
  hasUom: boolean
  member: IDimensionMember[]
}

interface IDimensionMember {
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
  children: IDimensionMember[]
}

interface IDimensionsDict {
  [key: number]: IDimension
}

interface IDimensionsByIdDict {
  [key: string]: { [key: string]: IDimensionMember }
}

interface IDataPoint {
  date: string
  values: { [key: string]: number }
}

interface ICubeMetadata {
  archiveStatusCode: string
  archiveStatusEn: string
  archiveStatusFr: string
  cansimId: string
  correction?: any
  cubeEndDate: string
  cubeStartDate: string
  cubeTitleEn: string
  cubeTitleFr: string
  dimension: {
    dimensionNameEn: string
    dimensionNameFr: string
    dimensionPositionId: number
    hasUom: boolean
    member: {
      classificationCode: string
      classificationTypeCode: string
      geoLevel: number
      memberId: number
      memberNameEn: string
      memberNameFr: string
      memberUomCode?: number
      parentMemberId: number
      terminated: number
      vintage: number
    }[]
  }[]
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
  frequencyCode: number
  nbDatapointsCube: number
  nbSeriesCube: number
  productId: string
  releaseTime: string
  responseStatusCode: number
  subjectCode: string[]
  surveyCode: string[]
}

interface IRawDataPoint {
  GEO: string
  REF_DATE: string
  VALUE: string
  UOM: string
  UOM_ID: string
  coords: number[]
}
