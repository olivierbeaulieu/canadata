import fetch from 'node-fetch'

export async function getCubeMetadata(cubeId: number): Promise<CubeMetadata> {
  const response = await statsCanApiRequest('getCubeMetadata', [
    { productId: cubeId },
  ]).then(response => response[0])

  if (response.status !== 'SUCCESS') {
    throw new Error(`Failed to fetch metadata for productId ${cubeId}`)
  }

  return response.object
}

export function getDefaultCoordinatesFromDimensionList(
  dimensionList: Dimension[]
): string[] {
  // Find a default coordinate to request
  const dimensionDefaults = dimensionList.map(
    dimension => dimension.member[0].memberId
  )

  // Creates a string like '1.2.1.0.0.0.0.0.0.0'
  const coordinate = [
    ...dimensionDefaults,
    ...Array(10 - dimensionDefaults.length).fill(0),
  ].join('.')

  return [coordinate]
}

function useCorsHack(url: string) {
  return 'https://cors-anywhere.herokuapp.com/' + url
}

export function getUomFromMetadata(metadata: CubeMetadata): number {
  // todo here the first member is assumed, should be dynamic
  return metadata.dimension.find(dimension => dimension.hasUom).member[0]
    .memberUomCode
}

function statsCanApiRequest(endpoint: string, body: any): Promise<any> {
  const url = useCorsHack(
    `https://www150.statcan.gc.ca/t1/wds/rest/${endpoint}`
  )

  // todo handle failures
  return fetch(url, {
    // mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(response => response.json())
}

export async function getSeriesInfoFromCubeIdCoord(
  cubeId: number,
  coordinates: string[]
): Promise<string[]> {
  const payload = coordinates.map(coordinate => {
    return {
      productId: cubeId,
      coordinate,
    }
  })

  const response = await statsCanApiRequest(
    'getSeriesInfoFromCubePidCoord',
    payload
  )

  return response
    .filter(entry => {
      const { object } = entry

      if (object.responseStatusCode === 0) {
        return true
      }

      console.error(
        `getSeriesInfoFromCubePidCoord failed on coord ${
          object.coordinate
        } and cubeId ${cubeId} with code ${object.responseStatusCode}`
      )
    })
    .map(entry => entry.object.vectorId)
}

export async function getVectorDataByRange(
  vectorIds: string[],
  startDate: string,
  endDate: string
): Promise<VectorData[]> {
  // Fetch the data points for the required vectors
  const payload = {
    vectorIds,

    // todo this time added at the end, is that right?
    startDataPointReleaseDate: startDate + 'T00:31',
    endDataPointReleaseDate: endDate + 'T00:01',
  }
  const vectorData = await statsCanApiRequest(
    'getBulkVectorDataByRange',
    payload
  )

  return vectorData
    .filter(vector => {
      if (vector.status === 'SUCCESS') return true

      const { object } = vector
      console.error(
        `getBulkVectorDataByRange failed with payload ${JSON.stringify(
          payload
        )}`
      )
      return false
    })
    .map(vector => vector.object)
}
