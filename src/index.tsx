import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/core'
import DefaultLayout from './components/layout/layout'
import RouteList from './routes/routeList'
import resetCss from './utils/styles/resetCss'
import initRegistry from './utils/retistry/mountRegistry'

initRegistry()

const Main: React.FC = (): JSX.Element => (
  <BrowserRouter
    basename={
      process.env.NODE_ENV === 'development' ? '/' : '/demo-integration-layer'
    }
  >
    <Global styles={resetCss} />
    <DefaultLayout>
      <RouteList />
    </DefaultLayout>
  </BrowserRouter>
)

ReactDom.render(<Main />, document.getElementById('root'))
