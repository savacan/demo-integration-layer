export type MicroSegments = 'integration' | 'sidebar'

const local: { key: MicroSegments; url: string }[] = [
  { key: 'sidebar', url: 'http://localhost:8002' },
  { key: 'integration', url: 'http://localhost:8001' }
]

const ghPages: { key: MicroSegments; url: string }[] = [
  { key: 'sidebar', url: 'https://savacan.github.io/demo-content1' },
  {
    key: 'integration',
    url: 'https://savacan.github.io/demo-integration-layer'
  }
]

export { local, ghPages }
