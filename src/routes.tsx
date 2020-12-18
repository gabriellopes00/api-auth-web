import { Router, Switch, Route } from 'react-router'
import { PrivateRoute } from './components/privateRoute'

import { Landing } from './pages/landing/index'
import { Dashboard } from './pages/dashboard/index'
import { notFound } from './pages/notFound'

import { browserHistory } from './hooks/history'

export const Root: React.FC = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        {/* <PrivateRoute exact path="/" component={Landing} /> */}
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={notFound} />
      </Switch>
    </Router>
  )
}
