import { Registry, ComponentController } from './registryTypes'

/**
 * customElementRegistryに近い形のレジストリをwindowにぶら下げることでマウントを行う。
 * 各コンポーネントはelementを受け取ってマウントする関数とアンマウントする関数を提供する（必要ない場合も関数を返す）。
 * idはsegment-componentId
 */

class MountRegistry implements Registry {
  private willDefine: Map<
    string,
    {
      promise: Promise<ComponentController>
      resolver: (value: ComponentController) => void
    }
  >

  private defined: Map<string, ComponentController>

  constructor() {
    this.willDefine = new Map<
      string,
      {
        promise: Promise<ComponentController>
        resolver: (value: ComponentController) => void
      }
    >()
    this.defined = new Map<string, ComponentController>()
  }

  define(id: string, controller: ComponentController) {
    console.log(`registry.define is called by id: ${id}`)
    this.defined.set(id, controller)
    const will = this.willDefine.get(id)
    if (will) {
      will.resolver(controller)
      this.willDefine.delete(id)
    }
  }

  isDefined(id: string) {
    return this.defined.has(id)
  }

  get(id: string) {
    return this.defined.get(id)
  }

  whenDefined(id: string) {
    const cont = this.get(id)
    if (cont) return Promise.resolve(cont)
    const will = this.willDefine.get(id)
    if (will) return will.promise
    // resolver定義前に呼ばれているというwarnで使えない……のでdummyを指定しておく。
    let resolver: (value: ComponentController) => void = _value =>
      console.log('miss setting resolver')
    const promise = new Promise<ComponentController>((res, rej) => {
      resolver = value => res(value)
    })
    this.willDefine.set(id, { promise, resolver })
    return promise
  }
}

const initRegistry = () => {
  const registry = new MountRegistry()
  window.registry = registry
  console.log('registry is init')
}

export default initRegistry
