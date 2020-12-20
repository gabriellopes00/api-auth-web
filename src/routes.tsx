import { Router, Switch, Route } from 'react-router'
import { PrivateRoute } from './components/privateRoute'

import { Landing } from './pages/landing/index'
import { Dashboard } from './pages/dashboard/index'
import { NotFound } from './pages/notFound'

import { browserHistory } from './hooks/history'

export const Root: React.FC = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
