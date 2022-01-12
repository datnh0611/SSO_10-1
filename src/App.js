import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from './store/auth-slice'
import { Route, Switch } from 'react-router-dom'
import { reqHandler } from './helpers/http-helper'
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

const App = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.auth.isLogin)

  useEffect(() => {
    ;(async () => {
      console.log('isLogin', isLogin)
      if (isLogin) return
      try {
        const currentUser = await reqHandler({
          url: `${Config.url}/api/v1/current_user`,
        })
        console.log('currentUser', currentUser)
        if (!Object.keys(currentUser).length) {
          console.log('Not have current user')
          dispatch(authActions.logout())
          return
        }
        dispatch(authActions.login())
      } catch (error) {
        console.log('Can not get current user!')
      }
    })()
  }, [])

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
      </Switch>
    </React.Suspense>
  )
  // }
}

export default App
