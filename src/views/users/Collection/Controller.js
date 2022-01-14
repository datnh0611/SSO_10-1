import React, { useState, useEffect } from 'react'
import View from './View'
import Config from 'src/configs/config'
import formatingHelper from '../../../helpers/formatingHelper'

const Controller = (props) => {
  const [users, setUsers] = useState([])

  const apiEndpoint = 'user'
  const apiPrefix = 'api/v1'

  const fields = [
    {
      field: 'username',
      label: 'Tên đăng nhập',
    },

    {
      field: 'created_at',
      label: 'Thời gian khởi tạo',
      template: (rowObj) => formatingHelper.timestampToDate(rowObj.created_at),
    },

    {
      field: 'last_login_at',
      label: 'Lần đăng nhập gần nhất',
      template: (rowObj) => formatingHelper.timestampToDate(rowObj.last_login_at),
    },

    {
      field: 'status',
      label: 'Trạng thái',
      template: (rowObj) => <div>Online</div>,
    },
  ]

  useEffect(() => {
    let isUnmount = true
    ;(async () => {
      try {
        if (users.length) {
          // USE CACHING TECHNIQUE TO OPTIMIZE WEB
          console.log(!users.length)
          console.log('Already load user!')
          return
        }
        const req = await fetch(`${Config.url}/${apiPrefix}/${apiEndpoint}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            // "token": reqConfig.token ? reqConfig.token : null
          },
          credentials: 'include',
        })
        console.log(req)
        if (!req.ok) {
          throw new Error('Có lỗi xảy ra!')
        }
        const data = await req.json()
        console.log('data', data)
        if (!isUnmount) {
          console.log('Component unmounted!')
          return
        }
        setUsers(data['results'])

        return () => {
          console.log('Clean up func!')
          isUnmount = false
        }
      } catch (error) {
        console.log(error)
        return
      }
    })()
    console.log('OK')
  }, [users])

  return <View fields={fields} data={users || []} navigateTo={`/${apiEndpoint}`} />
}

export default Controller
