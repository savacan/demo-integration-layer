export type MicroSegments = 'integration' | 'sidebar' | 'vueComponent'

const local: { key: MicroSegments; url: string }[] = [
  { key: 'sidebar', url: 'http://localhost:8002' },
  { key: 'integration', url: 'http://localhost:8001' },
  { key: 'vueComponent', url: 'http://localhost:8003' }
]

const ghPages: { key: MicroSegments; url: string }[] = [
  // { key: 'sidebar', url: 'https://savacan.github.io/demo-sidebar' },
  { key: 'sidebar', url: 'http://localhost:8002' },
  { key: 'vueComponent', url: 'http://localhost:8003' },
  {
    key: 'integration',
    url: 'https://savacan.github.io/demo-integration-layer'
  }
]

export { local, ghPages }
