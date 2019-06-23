export type MicroSegments = 'integration' | 'testContent1'

const local: { key: MicroSegments; url: string }[] = [
  { key: 'testContent1', url: 'http://localhost:8002/' },
  { key: 'integration', url: 'http://localhost:8001/public' }
]

export { local }