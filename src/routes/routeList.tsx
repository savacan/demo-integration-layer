import * as React from 'react'
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router'
import { History } from 'history'
import MountPoint from '../components/utility/mountPoint'
import idetificationKeyFactory from '../externals/management/idetificationKeyFactory'

declare global {
  interface Window {
    context: { history: History }
  }
}

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
          <Route path="/" exact render={_props => <div>exact route</div>} />
          <Route
            path="/next"
            render={_props => (
              <div>
                <div>sidebar route</div>
                <MountPoint
                  microId={idetificationKeyFactory('sidebar', 'common')}
                  type="micro"
                />
              </div>
            )}
          />
        </Switch>
      </>
    )
  }
}

export default withRouter(RouteList)
