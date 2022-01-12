import React from 'react'
import { useHistory } from 'react-router-dom'
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
      console.log('resp', resp)
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return <View onSubmit={submitHandler} checkPassword={checkPassword} />
}

export default Controller
