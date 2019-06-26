import * as React from 'react'
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router'
import { History } from 'history'

import styled from '@emotion/styled'
import VueComponent from '../externals/components/vueComponent'
import SideBar from '../externals/components/SideBar'

declare global {
  interface Window {
    context: { history: History }
  }
}

const LabelDiv = styled.div({
  fontSize: '32px',
  marginBottom: '100px'
})

class RouteList extends React.Component<{} & RouteComponentProps<{}>> {
  public constructor(props: Readonly<RouteComponentProps<{}>>) {
    super(props)
    const { history } = props
    window.context = window.context ? window.context : { history }
  }

  public render() {
    return (
      <>
        <Switch>
          <Route
            path="/"
            exact
            render={_props => <LabelDiv>top default route</LabelDiv>}
          />
          <Route path="/react" component={SideBar} />
          <Route path="/vue" component={VueComponent} />
        </Switch>
      </>
    )
  }
}

export default withRouter(RouteList)
