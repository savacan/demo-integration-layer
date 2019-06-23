import {
  MicroSegments,
  local,
  ghPages
} from '../externals/management/manageExternals'

/**
 * のちのちdockerで起動したりWBS使ったりしてみる場合ここでhostnameを判別してurlを解決する。
 * 今回は一旦localhostでの起動のみを考慮する？→ghpagesでやってみる
 */

const hostSwithcer = (hostname: string) => {
  if (hostname === 'localhost') return local
  if (hostname === 'savacan.github.io') return ghPages
  return null
}

const URLResolver = (segment: MicroSegments): string | null => {
  const { hostname } = window.location
  console.log(hostname)
  const urls = hostSwithcer(hostname)
  if (urls === null) return null
  const result = urls.find(e => e.key === segment)
  if (!result) return null
  return result.url
}

export default URLResolver
