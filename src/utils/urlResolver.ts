import { MicroSegments, local } from '../externals/management/manageExternals'

/**
 * のちのちdockerで起動したりWBS使ったりしてみる場合ここでhostnameを判別してurlを解決する。
 * 今回は一旦localhostでの起動のみを考慮する？
 */
const URLResolver = (segments: MicroSegments): string | null => {
  const { hostname } = window.location
  console.log(hostname)
  if (hostname === 'localhost') {
    const result = local.find(e => e.key === segments)
    if (!result) return null
    return result.url
  }
  return null
}

export default URLResolver
