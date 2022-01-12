import React, { useState, useEffect } from 'react'
import View from './View'
import Config from 'src/configs/config'

const Controller = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const req = await fetch(`${Config.url}/api/v1/user`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            // "token": reqConfig.token ? reqConfig.token : null
          },
        })
        if (!req.ok()) {
          throw new Error(data.error_message || 'Có lỗi xảy ra!')
        }
        const data = await req.json()
        setUsers(data['results'])
      } catch (error) {
        console.log(error)
        return
      }
    })()
    console.log('OK')
  }, [users])

  return <View users={users || []} />
}

export default Controller
