import { Route, Redirect, RouteProps } from 'react-router'
import { isLogged } from '../hooks/login/isLogged'

export const PrivateRoute = (props: RouteProps) =>
  isLogged() ? <Route {...props} /> : <Redirect to="/" />
