import loadjs from 'loadjs'
import URLResolver from './urlResolver'
import { MicroSegments } from '../externals/management/manageExternals'
import { MicroIdetificationKey } from '../externals/management/idetificationKeyFactory'

const toVenderString = (segment: MicroSegments): string =>
  `${segment}_vendor.bundle.js`
const toComponentString = (componentId: string): string =>
  `${componentId}.bundle.js`

/**
 * manifest.jsonを使う場合ここでhashを処理。
 * vendorから並列ではなく同期で読み込ませる。
 */
const load = (idetificationKey: MicroIdetificationKey): Promise<unknown> => {
  const { segment, componentId } = idetificationKey
  const id = idetificationKey.toId()
  const result = new Promise((resolve, reject) => {
    const baseUrl = URLResolver(segment)
    if (loadjs.isDefined(id)) resolve()
    if (!baseUrl) {
      const error = new Error(`segments ${segment} is undefined`)
      reject(error)
    } else {
      loadjs(
        [
          `${baseUrl}/${toVenderString(segment)}`,
          `${baseUrl}/${toComponentString(componentId)}`
        ],
        id,
        {
          async: false,
          success() {
            resolve()
          },
          error(err) {
            reject(err)
          }
        }
      )
    }
  })
  return result
}

const loadjsWrapper = {
  load,
  isDefined: (key: string) => loadjs.isDefined(key)
}

export default loadjsWrapper
