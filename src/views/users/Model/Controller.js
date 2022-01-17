import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useHttp from 'src/hooks/use-http'
import { getSingle } from 'src/helpers/request-helper'
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

  const { req, data, error } = useHttp(getSingle)

  useEffect(() => {
    console.log('useEffect')
    let isUnmount = true

    ;(async () => {
      console.log('LOAD USER!')
      await req({ endpoint: apiEndpoint, id: param.userId })

      console.log('resp', data)
      if (!isUnmount) {
        console.log('Component unmounted!')
        return
      }
      setUser(data)

      // try {
      //   const resp = await reqHandler({
      //     url: `${url}/${apiPrefix}/${apiEndpoint}/${param.userId}`,
      //   })
      //   if (!isUnmount) {
      //     console.log('Component unmounted!')
      //     return
      //   }
      //   setUser(resp)
      // } catch (error) {
      //   console.log('error', error)
      //   return
      // }
    })()

    return () => {
      isUnmount = false
    }
  }, [req, url, apiPrefix, apiEndpoint, user])

  return <View data={user} onGoBack={goBackHandler} />
}

export default Controller
