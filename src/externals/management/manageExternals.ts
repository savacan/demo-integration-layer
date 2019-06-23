export type MicroSegments = 'integration' | 'testContent1'

const local: { key: MicroSegments; url: string }[] = [
  { key: 'testContent1', url: 'http://localhost:8002/' },
  { key: 'integration', url: 'http://localhost:8001/public' }
]

const ghPages: { key: MicroSegments; url: string }[] = [
  { key: 'testContent1', url: 'https://savacan.github.io/demo-content1/' },
  {
    key: 'integration',
    url: 'https://savacan.github.io/demo-integration-layer/'
  }
]

export { local, ghPages }
