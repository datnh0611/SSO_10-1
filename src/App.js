import React, { useEffect, useState } from 'react'
import useHttp from './hooks/use-http'
import { getMany as getCurrentUser } from './helpers/crud-helper'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from './store/auth-slice'
import { Route, Switch, useHistory } from 'react-router-dom'
import { reqHandler } from './helpers/http-helper'
// import {}
import Config from './configs/config'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Controller'))
const Register = React.lazy(() => import('./views/pages/register/Controller'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Consent = React.lazy(() => import('./views/consent/View'))

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isLogin = useSelector((state) => state.auth.isLogin)

  const { req: _get, data: currentUserData, error } = useHttp(getCurrentUser)
  useEffect(() => {
    if (isLogin) return

    const csrfKey = localStorage.getItem('X_CSRF_TOKEN')
    if (!csrfKey) {
      history.push('/login')
      return
    }
    if (!currentUserData) {
      _get('current_user', null, csrfKey) // endpoint, query, csrfKey
    } else {
      dispatch(authActions.reLogin({ ...currentUserData['current_user'] }))
    }
    if (error) {
      dispatch(authActions.logout())
      history.push('/login')
      return
    }
  }, [_get, getCurrentUser, currentUserData, isLogin])

  return (
    <React.Suspense fallback={loading}>
      <Switch>
        {!isLogin && (
          <Route path="/login" name="Login Page" render={(props) => <Login {...props} />} />
        )}
        {!isLogin && (
          <Route
            exact
            path="/register"
            name="Register Page"
            render={(props) => <Register {...props} />}
          />
        )}
        <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
        <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
        {isLogin && <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />}
        {isLogin && (
          <Route path="/consent" name="Consent" render={(props) => <Consent {...props} />} />
        )}
      </Switch>
    </React.Suspense>
  )
  // }
}

export default App
