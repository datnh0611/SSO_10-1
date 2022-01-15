import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { reqHandler } from 'src/helpers/http-helper'
import Config from '../../../configs/config'
import View from './View'

const Controller = (props) => {
  /** HOOKS */
  const param = useParams()
  const history = useHistory()

  /** API INFO */
  const apiEndpoint = 'user'
  const { url, apiPrefix } = Config

  /** STATE */
  const [user, setUser] = useState({})

  const goBackHandler = () => history.goBack()

  useEffect(() => {
    let isUnmount = true

    ;(async () => {
      try {
        const resp = await reqHandler({
          url: `${url}/${apiPrefix}/${apiEndpoint}/${param.userId}`,
        })
        if (!isUnmount) {
          console.log('Component unmounted!')
          return
        }
        setUser(resp)
      } catch (error) {
        console.log('error', error)
        return
      }
    })(reqHandler, url, apiPrefix, apiEndpoint)

    return () => {
      isUnmount = false
    }
  }, [])
  return <View data={user} onGoBack={goBackHandler} />
}

export default Controller
