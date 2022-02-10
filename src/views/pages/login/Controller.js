import React from 'react'
import { useHistory } from 'react-router-dom'
// import useHttp from 'src/hooks/use-http'
// import { post as login } from '../../../helpers/crud-helper'
import { useDispatch } from 'react-redux'
import { authActions } from 'src/store/auth-slice'
import { reqHandler } from 'src/helpers/http-helper'
import Config from '../../../configs/config'
import View from './View'

const Controller = () => {
  const apiEndpoint = 'login'
  const history = useHistory()
  const dispatch = useDispatch()

  const submitHandler = async (data) => {
    try {
      const resp = await reqHandler({
        url: `${Config.url}/api/v1/login`,
        method: 'POST',
        body: data,
        credentials: 'include',
      })
      dispatch(authActions.login(resp))
      history.push('/')
    } catch (error) {
      alert(error)
    }
  }

  return <View onSubmit={submitHandler} />
}

export default Controller
