import * as React from 'react'
import URLResolver from '../../../utils/urlResolver'
import { MicroIdetificationKey } from '../../../externals/management/idetificationKeyFactory'

interface IProps {
  microId: MicroIdetificationKey
  type: 'micro' | 'custom'
}

class MountPoint extends React.Component<IProps> {
  constructor(props: Readonly<IProps>) {
    super(props)
    console.log(props.type)
  }

  componentDidMount() {
    const { microId } = this.props
    console.log(`id: ${microId.segment + microId.componentId} is mounted`)
    const url = URLResolver(microId.segment)
    console.log(`target url is ${url}`)
  }

  render() {
    const { microId } = this.props
    const id = `${microId.segment}-${microId.componentId}`
    return <div id={id}>test</div>
  }
}

export default MountPoint
