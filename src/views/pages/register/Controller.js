import React from 'react'
import { useHistory } from 'react-router-dom'
import useHttp from 'src/hooks/use-http'
// import { post } from '../../../helpers/request-helper'
import { reqHandler } from 'src/helpers/http-helper'
import Config from '../../../configs/config'
import View from './View'

const Controller = () => {
  const history = useHistory()

  const checkPassword = (password, confirmPassword) => {
    if (password === confirmPassword) return true
    return null
  }

  const submitHandler = async (data) => {
    try {
      const resp = await reqHandler({
        url: `${Config.url}/api/v1/user`,
        method: 'POST',
        body: data,
      })
      history.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return <View onSubmit={submitHandler} checkPassword={checkPassword} />
}

export default Controller
