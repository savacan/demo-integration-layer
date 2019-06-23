import * as React from 'react'
import URLResolver from '../../../utils/urlResolver'
import { MicroIdetificationKey } from '../../../externals/management/idetificationKeyFactory'
import loadjsWrapper from '../../../utils/loadjsWrapper'

interface IProps {
  microId: MicroIdetificationKey
  type: 'micro' | 'custom'
}

const clickHandler = (microId: MicroIdetificationKey) => (
  event: React.MouseEvent
) => {
  event.preventDefault()
  const { segment } = microId
  loadjsWrapper.load(microId)
  console.log(`on click ${segment}`)
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
    return (
      <div id={microId.toId()}>
        <div> its {`${microId.toId()}`} </div>
        <button onClick={clickHandler(microId)} type="button">
          test button
        </button>
      </div>
    )
  }
}

export default MountPoint
