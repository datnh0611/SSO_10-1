import React, { useState, useEffect } from 'react'
import View from './View'
import Config from 'src/configs/config'
import formatingHelper from '../../../helpers/formatingHelper'
import { reqHandler } from 'src/helpers/http-helper'

const Controller = (props) => {
  const apiEndpoint = 'client'
  const apiPrefix = 'api/v1'

  /** STATE */
  const [clients, setClients] = useState([])

  const fields = [
    {
      field: 'client_name',
      label: 'Tên khách',
    },
    {
      field: 'created_at',
      label: 'Khởi tạo ngày',
      template: (rowObj) => formatingHelper.timestampToDate(rowObj.created_at),
    },
    {
      field: 'client_id_issued_at',
      label: 'Ngày tạo mã',
      template: (rowObj) => formatingHelper.timestampToDate(rowObj.client_id_issued_at),
    },
    {
      field: 'client_secret_expires_at',
      label: 'Ngày hết hạn',
      template: (rowObj) => formatingHelper.timestampToDate(rowObj.client_secret_expires_at),
    },
  ]

  useEffect(() => {
    let isUnmount = true

    ;(async () => {
      try {
        if (clients.length) {
          // USE CACHING TECHNIQUE TO OPTIMIZE WEB
          console.log('Already load clients!')
          return
        }

        const data = await reqHandler({
          url: `${Config.url}/${apiPrefix}/${apiEndpoint}`,
          credentials: 'include',
        })
        if (!isUnmount) {
          console.log('Component unmounted!')
          return
        }
        // API return []
        if (!data['results'].length) {
          return
        }
        setClients(data['results'])
        return () => {
          console.log('Clean up func!')
          isUnmount = false
        }
      } catch (error) {
        console.log(error)
        return
      }
    })()
  }, [clients, apiPrefix, apiEndpoint])

  return <View fields={fields} data={clients || []} navigateTo={`/${apiEndpoint}`} />
}

export default Controller
