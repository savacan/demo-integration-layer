import { MicroSegments } from './manageExternals'

export interface MicroIdetificationKey {
  segment: MicroSegments
  componentId: string
  toId: () => string
}

const idetificationKeyFactory = (
  segment: MicroSegments,
  componentId: string
): MicroIdetificationKey => {
  const key: MicroIdetificationKey = {
    segment,
    componentId,
    toId: () => `${segment}-${componentId}`
  }
  return key
}

export default idetificationKeyFactory
