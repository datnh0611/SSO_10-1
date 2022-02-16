import React, { useEffect, useState } from 'react'
import useHttp from 'src/hooks/use-http'
import { useSelector } from 'react-redux'
// import { reqHandler, reqHandlerWithRedirection } from '../../helpers/http-helper'
import { getMany as authorizeRequest, post as consentRequest } from 'src/helpers/crud-helper'
import View from './View'
// import config from 'src/configs/config'

const Controller = (props) => {
  /** API INFO */
  const apiEndpoint = 'oauth2/authorize'

  /** STATE */
  const [client, setClient] = useState({})
  const { csrf_token: csrfToken, id: authId } = useSelector((state) => state.auth.user)

  const query = window.location.search
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  const { req: _read, data } = useHttp(authorizeRequest)
  const dataKey = 'client'

  // const clientMetadata = useMemo(() => JSON.parse(client['_client_metadata']), [client])

  useEffect(() => {
    if (!data) {
      _read({ apiEndpoint, query, csrfToken })
      return
    }
    if (!(dataKey in data)) {
      console.log(data)
      return
    }

    setClient(data[dataKey])
  }, [client, data, dataKey, apiEndpoint, query, csrfToken, _read])

  const { req: _consent, error } = useHttp(consentRequest)
  const acceptHandler = async () => {
    await _consent({
      apiEndpoint,
      query,
      data: new URLSearchParams({ confirm: true, user_id: authId }),
      json: false,
      csrfToken,
      headers,
      credentials: 'omit',
    })
  }

  const denyHandler = async () => {
    await _consent({
      apiEndpoint,
      query,
      data: new URLSearchParams({ confirm: false, user_id: authId }),
      json: false,
      csrfToken,
      headers,
      credentials: 'omit',
    })
    console.log('DENY REQUEST!')
  }

  useEffect(() => {
    console.log('error', error)
  }, [error])

  return <View client={client} onAccept={acceptHandler} onDeny={denyHandler} />
}

export default Controller
