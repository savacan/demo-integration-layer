export type MicroSegments = 'self' | 'testContent1'

export interface MicroIdetificationKey {
    segment: MicroSegments
    id: string
}

const local: {key: MicroSegments, url: string}[] = [
  { key: 'testContent1', url: 'http://localhost:8002/' },
  { key: 'self', url: 'http://localhost:8001/' },
];

export { local };
