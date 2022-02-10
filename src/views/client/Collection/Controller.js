import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import useHttp from 'src/hooks/use-http'
import View from './View'
import Config from 'src/configs/config'
import formatingHelper from '../../../helpers/formatingHelper'
import { getMany } from 'src/helpers/crud-helper'

const Controller = (props) => {
  const apiEndpoint = 'client'

  /** STATE */
  const [objs, setObjs] = useState([])
  const { csrf_token: csrfToken, id: authId } = useSelector((state) => state.auth.user)

  const fields = [
    {
      field: 'client_name',
      label: 'Tên bên thứ ba',
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
      template: (rowObj) =>
        !rowObj.client_secret_expires_at
          ? 'Vô thời hạn'
          : formatingHelper.timestampToDate(rowObj.client_secret_expires_at),
    },
  ]

  const { req: _read, data: data } = useHttp(getMany)

  useEffect(() => {
    if (!data) {
      _read(apiEndpoint, null, csrfToken) // endpoint, query, csrfToken
    } else {
      setObjs(data['results'])
    }
  }, [objs, data, apiEndpoint, csrfToken, _read])

  return <View fields={fields} data={objs || []} navigateTo={`/${apiEndpoint}`} />
}

export default Controller
