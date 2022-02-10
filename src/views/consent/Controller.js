import React, { useEffect, useCallback, useState, useMemo } from 'react'
import useHttp from 'src/hooks/use-http'
import { useSelector } from 'react-redux'
import { reqHandler } from '../../helpers/http-helper'
import { authorizeRequest } from 'src/helpers/consent-helper'
import View from './View'
import config from 'src/configs/config'

const Controller = (props) => {
  /** API INFO */
  const apiEndpoint = 'oauth2/authorize'

  /** STATE */
  const [user, setUser] = useState(null)
  const [client, setClient] = useState(null)
  const { csrf_token: csrfToken, id: authId } = useSelector((state) => state.auth.user)

  const urlParam = new URLSearchParams(window.location.search)

  const { req: _read, data: data } = useHttp(authorizeRequest)

  useEffect(() => {
    if (!data) {
      _read(apiEndpoint, window.location.search, csrfToken)
      // console.log('data', data)
    } else {
      console.log('consent', data)
      // const dataHandled = handleData(data)
      // setClient(dataHandled)
    }
  }, [user, client])
  return <View user={user} client={client} />
}

export default Controller
