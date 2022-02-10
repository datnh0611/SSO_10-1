import React, { useEffect, useCallback, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { reqHandler } from '../../helpers/http-helper'
import View from './View'
import config from 'src/configs/config'

const Controller = (props) => {
  const [user, setUser] = useState(null)
  const [client, setClient] = useState(null)

  // const url = new URLSearchParams({
  //   response_type:
  // })
  const urlParam = new URLSearchParams(window.location.search)

  useEffect(() => {
    if (user && client) {
      console.log('User or Client already exist!')
      return
    }

    ;(async () => {
      const response = await reqHandler({
        url: `${config.url}/api/v1/oauth2/authorize?response_type=${urlParam.get(
          'response_type',
        )}&client_id=${urlParam.get('client_id')}&scope=${urlParam.get('scope')}`,
        credentials: 'include',
        referrerPolicy: 'same-origin',
      })

      console.log('response', response)
    })()
  }, [user, client])
  return <View />
}

export default Controller
