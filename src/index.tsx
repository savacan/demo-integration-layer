import * as React from 'react'
import * as ReactDom from 'react-dom'
import MountPoint from './components/utility/mountPoint'
import idetificationKeyFactory from './externals/management/idetificationKeyFactory'

const Main: React.FC = (): JSX.Element => (
  <div>
    <div> Hello, Happy World! </div>
    <MountPoint
      microId={idetificationKeyFactory('integration', 'test')}
      type="micro"
    />
  </div>
)

ReactDom.render(<Main />, document.getElementById('root'))
