import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import useHttp from 'src/hooks/use-http'
import View from './View'
import Config from 'src/configs/config'
import formatingHelper from '../../../helpers/formatingHelper'
import { getMany } from 'src/helpers/crud-helper'

const Controller = (props) => {
  const apiEndpoint = 'identity'

  /** STATE */
  const [objs, setObjs] = useState([])
  const { csrf_token: csrfToken, id: authId } = useSelector((state) => state.auth.user)

  const fields = [
    {
      field: 'full_name',
      label: 'Họ tên',
    },
    {
      field: 'gender',
      label: 'Giới tính',
      // template: (rowObj) => formatingHelper.timestampToDate(rowObj.created_at),
    },
    {
      field: 'email',
      label: 'Email',
      // template: (rowObj) => formatingHelper.timestampToDate(rowObj.client_id_issued_at),
    },
    {
      field: 'phone_number',
      label: 'Số điện thoại',
      // template: (rowObj) => formatingHelper.timestampToDate(rowObj.client_id_issued_at),
    },
  ]

  const { req: _read, data: data } = useHttp(getMany)

  useEffect(() => {
    if (!data) {
      _read({ apiEndpoint, csrfToken })
      return
    }
    // TODO: add cache to optimize performance
    setObjs(data['results'])
    // }
  }, [data, apiEndpoint, csrfToken, _read])

  return <View fields={fields} data={objs || []} navigateTo={`/${apiEndpoint}`} />
}

export default Controller
