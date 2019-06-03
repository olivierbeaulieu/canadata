import React from 'react'
import DimensionSelect from './dimension-select'
import { getUomFromMetadata } from '../statscan-client'
import ChartView from './chart-view'
import { cloneDeep } from 'lodash'
import { PageHeader, Button, Card, Divider, Typography, Drawer } from 'antd'
import ChartTypeSelect from './chart-type-select'
import { formatDateString } from '../utils/format'

const { Title, Text } = Typography

interface IProps {
  vectorData: VectorData[]
  metadata: CubeMetadata
  dimensionFilters: DimensionFilters
}

interface IState {
  metadata: CubeMetadata
  dimensions: DimensionsDict
  dimensionFilters: DimensionFilters
  chartType: ChartType
  isFiltersDrawerOpen: boolean
}

export default class ChartContainerView extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props)

    const { metadata, dimensionFilters } = props
    const dimensions = this.getDimensionsFromMetadata(metadata)

    this.state = {
      metadata,
      dimensions,
      chartType: 'line',
      isFiltersDrawerOpen: false,
      dimensionFilters,
    }

    this.getDimensionFilterSelects = this.getDimensionFilterSelects.bind(this)
    this.toggleFiltersDrawer = this.toggleFiltersDrawer.bind(this)
  }

  /**
   * Returns an object where the key is the dimension position ID
   */
  private getDimensionsFromMetadata(metadata: CubeMetadata): DimensionsDict {
    return metadata.dimension.reduce((acc, dimension) => {
      const clonedDimension = cloneDeep(dimension)

      // Ensure all dimension members have a children array
      clonedDimension.member.forEach(dimensionMember => {
        const member = dimensionMember as DimensionMember
        member.children = []
      })

      acc[dimension.dimensionPositionId] = clonedDimension

      return acc
    }, {})
  }

  // Filters out the raw data points based on the selected filters
  private applyFilters(
    vectorData: VectorData[],
    dimensionFilters: DimensionFilters
  ): VectorData[] {
    return vectorData.filter(vectorData => {
      const coords = vectorData.coordinate
        .split('.')
        .map(coord => Number(coord))
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

  private getDimensionFilterSelects(): React.ReactNode {
    const { dimensions, dimensionFilters } = this.state

    return Object.keys(dimensionFilters).map(dimensionId => {
      const isMultiple = true

      // If there are zero or one options, don't show the select
      if (dimensions[dimensionId].member.length <= 1) {
        return null
      }

      const select = (
        <DimensionSelect
          multiple={isMultiple}
          value={dimensionFilters[dimensionId]}
          dimension={dimensions[dimensionId]}
          onChange={value => {
            this.setState(state => {
              const newValue = isMultiple ? value : [value]

              return {
                dimensionFilters: Object.assign({}, state.dimensionFilters, {
                  [dimensionId]: newValue,
                }),
              }
            })
          }}
        />
      )

      return (
        <React.Fragment key={`dimension-filter-group-${dimensionId}`}>
          <Text strong style={{ display: 'block', marginBottom: '5px' }}>
            {dimensions[dimensionId].dimensionNameEn}
          </Text>
          {select}
          <Divider />
        </React.Fragment>
      )
    })
  }

  private toggleFiltersDrawer(): void {
    this.setState(state => {
      return {
        isFiltersDrawerOpen: !state.isFiltersDrawerOpen,
      }
    })
  }

  public render(): React.ReactNode {
    const { vectorData } = this.props

    const {
      chartType,
      metadata,
      dimensions,
      dimensionFilters,
      isFiltersDrawerOpen,
    } = this.state

    const uomId = getUomFromMetadata(metadata)

    const {
      productId,
      cubeTitleEn,
      cubeStartDate,
      cubeEndDate,
      frequencyCode,
    } = metadata

    console.log({
      state: this.state,
      // props: this.props,
      // vectorData: this.props.vectorData,
    })

    // Apply dimension filters to the vector data
    const filteredVectorData = this.applyFilters(vectorData, dimensionFilters)

    return (
      <Card
        bordered={false}
        title={
          <PageHeader
            onBack={() => window.history.back()}
            title={cubeTitleEn}
            subTitle={`From ${formatDateString(
              cubeStartDate,
              'MMMM YYYY'
            )} to ${formatDateString(cubeEndDate, 'MMMM YYYY')}`}
          />
        }
      >
        <Button
          icon="setting"
          type="primary"
          onClick={this.toggleFiltersDrawer}
        >
          Show Filters
        </Button>
        <ChartView
          data={filteredVectorData}
          dimensions={dimensions}
          uomId={uomId}
          type={chartType}
          frequencyCode={frequencyCode}
        />
        <Drawer
          title="Filters"
          placement="left"
          closable={true}
          onClose={this.toggleFiltersDrawer}
          visible={isFiltersDrawerOpen}
          width={300}
        >
          {this.getDimensionFilterSelects()}

          <Text strong style={{ display: 'block', marginBottom: '5px' }}>
            Chart Type
          </Text>

          <ChartTypeSelect
            selected={chartType}
            onChange={event => {
              this.setState({
                chartType: event.target.value,
              })
            }}
          />
        </Drawer>
        <p>
          <a
            target="_blank"
            href={`https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=${productId}01`}
          >
            Source: Statistics Canada
          </a>
        </p>
      </Card>
    )
  }
}
