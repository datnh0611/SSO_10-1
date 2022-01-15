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
  const apiEndpoint = 'client'
  const { url, apiPrefix } = Config

  /** STATE */
  const [client, setClient] = useState({})

  const goBackHandler = () => history.goBack()

  const fields = [
    {
      field: 'grant_types',
      label: '...',
    },

    {
      field: 'redirect_uris',
      label: '...',
    },

    {
      field: 'response_types',
      label: '...',
    },

    {
      field: 'scope',
      label: '...',
    },

    {
      field: 'token_endpoint_auth_method',
      label: '...',
    },

    {
      field: 'client_id_issued_at',
      label: '...',
    },

    {
      field: 'client_secret_expires_at',
      label: '...',
    },
  ]
  useEffect(() => {
    let isUnmount = true

    ;(async () => {
      try {
        const resp = await reqHandler({
          url: `${url}/${apiPrefix}/${apiEndpoint}/${param.clientId}`,
        })
        if (!isUnmount) {
          console.log('Component unmounted!')
          return
        }
        setClient(resp)
      } catch (error) {
        console.log('error', error)
        return
      }
    })(reqHandler, url, apiPrefix, apiEndpoint)

    return () => {
      isUnmount = false
    }
  }, [])
  return <View data={client} onGoBack={goBackHandler} />
}

export default Controller
