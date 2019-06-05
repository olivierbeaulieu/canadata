import React, { useState } from 'react'
import CubeMetadataLoader from './cube-metadata-loader'
import ChartView from './chart-view'
import { Button, Icon, PageHeader, Card, Spin } from 'antd'
import { FiltersView } from './filters-view'
import VectorDataLoader from './vector-data-loader'
import { getUomFromMetadata } from '../utils/statscan'
import {
  formatDateString,
  getDimensionsFromMetadata,
  dimensionFilterMapToCoordsList,
} from '../utils/format'

type Props = {
  cubeId: number
  metadata: CubeMetadata
  dimensionFilters: DimensionFilters
}

export default function ChartContainer(props: Props): React.ReactElement {
  const cubeId = Number(props.cubeId)

  const [dimensionFilters, setDimensionFilters] = useState(
    props.dimensionFilters
  )

  const { metadata } = props
  const { cubeTitleEn, cubeStartDate, cubeEndDate, frequencyCode } = metadata
  const uomId = getUomFromMetadata(metadata)
  const dimensionsDict = getDimensionsFromMetadata(metadata)
  const sourceUrl = `https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=${cubeId}01`
  const subtitle = `From ${formatDateString(
    cubeStartDate,
    'MMMM YYYY'
  )} to ${formatDateString(cubeEndDate, 'MMMM YYYY')}`

  const coordinates = dimensionFilterMapToCoordsList(dimensionFilters)

  const [chartType, setChartType] = useState('line' as ChartType)
  const [isFiltersDrawerOpen, setIsFiltersDrawerOpen] = useState(false)

  return (
    // Why do I need to specify 100%?
    <div style={{ width: '100%' }}>
      <PageFrame title={cubeTitleEn} subtitle={subtitle} sourceUrl={sourceUrl}>
        <FiltersView
          isVisible={isFiltersDrawerOpen}
          onClose={() => setIsFiltersDrawerOpen(false)}
          dimensions={dimensionsDict}
          dimensionFilters={dimensionFilters}
          chartType={chartType}
          onDimensionFilterChange={(
            filterId: string,
            filterValue: number[]
          ) => {
            setDimensionFilters(
              Object.assign({}, dimensionFilters, {
                [filterId]: filterValue,
              })
            )
          }}
          onChartTypeChange={chartType => setChartType(chartType)}
        />

        <div>
          <Button
            icon="setting"
            type="primary"
            onClick={() => setIsFiltersDrawerOpen(true)}
          >
            Show Filters
          </Button>
        </div>

        <VectorDataLoader
          cubeId={cubeId}
          startDate={cubeStartDate}
          endDate={cubeEndDate}
          coordinates={coordinates}
          render={({ isLoading, isLoadingDone, vectorData }) => {
            const data = applyFilters(vectorData, dimensionFilters)

            if (!isLoading && isLoadingDone && vectorData) {
              return (
                <ChartView
                  data={data}
                  type={chartType}
                  frequencyCode={frequencyCode}
                  uomId={uomId}
                  dimensions={dimensionsDict}
                />
              )
            }
            return null
          }}
        />
      </PageFrame>
    </div>
  )
}

function PageFrame(props: {
  title: string
  subtitle: string
  sourceUrl: string
  children?: React.ReactElement | React.ReactElement[]
}): React.ReactElement {
  const { title, subtitle, sourceUrl, children } = props

  return (
    <Card
      bordered={false}
      title={
        <PageHeader
          onBack={() => window.history.back()}
          title={title}
          subTitle={subtitle}
        />
      }
      actions={[
        <a target="_blank" key="statscan-link" href={sourceUrl}>
          Source: Statistics Canada
        </a>,
      ]}
    >
      {children}
    </Card>
  )
}

// Filters out the raw data points based on the selected filters
function applyFilters(
  vectorData: VectorData[],
  dimensionFilters: DimensionFilters
): VectorData[] {
  return vectorData.filter(vectorData => {
    const coords = vectorData.coordinate.split('.').map(coord => Number(coord))
    let match = true

    for (const id of Object.keys(dimensionFilters)) {
      const dimensionFilterId = Number(id)
      const dimensionFilterValue = dimensionFilters[dimensionFilterId]
      const coordIndex = Number(dimensionFilterId) - 1

      if (!dimensionFilterValue.includes(coords[coordIndex])) {
        match = false
        break
      }
    }

    return match
  })
}
