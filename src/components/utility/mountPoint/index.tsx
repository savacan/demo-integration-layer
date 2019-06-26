import * as React from 'react'
import { MicroIdetificationKey } from '../../../externals/management/idetificationKeyFactory'
import loadjsWrapper from '../../../utils/loadjsWrapper'

interface IProps {
  microId: MicroIdetificationKey
  type: 'micro' | 'custom'
}

class MountPoint extends React.Component<IProps> {
  private refEls: React.RefObject<HTMLDivElement>

  private componentController: { mount: () => void; unmount: () => void }

  constructor(props: Readonly<IProps>) {
    super(props)
    this.refEls = React.createRef<HTMLDivElement>()
    this.componentController = { mount: () => {}, unmount: () => {} }
  }

  public componentDidMount() {
    const { microId } = this.props
    window.registry
      .whenDefined(microId.toId())
      .then(factory => {
        console.log('when defined ref is :', this.refEls.current)
        if (this.refEls.current) {
          this.componentController = factory(this.refEls.current)
          this.componentController.mount()
        }
      })
      .catch(e => console.log(e))
      .finally(() => console.log('component load finaly'))
    loadjsWrapper.load(microId)
  }

  componentWillUnmount() {
    this.componentController.unmount()
  }

  render() {
    const { microId } = this.props
    return <div ref={this.refEls} id={microId.toId()} />
  }
}

export default MountPoint
