import React, { useState, useEffect } from 'react'
import useHttp from 'src/hooks/use-http'
import { useSelector } from 'react-redux'
import View from './View'
// import Config from 'src/configs/config'
import formatingHelper from '../../../helpers/formatingHelper'
// import { reqHandler } from 'src/helpers/http-helper'
import { getMany } from 'src/helpers/crud-helper'

const Controller = (props) => {
  const apiEndpoint = 'user'
  const apiPrefix = 'api/v1'

  /** STATE */
  const [objs, setObjs] = useState([])
  const { csrf_token: csrfToken, id } = useSelector((state) => state.auth.user)

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
      template: (rowObj) => (rowObj.status === 1 ? 'Online' : 'Offline'),
    },
  ]
  const { req: _read, data: data } = useHttp(getMany)
  useEffect(() => {
    if (!data) {
      _read({ apiEndpoint, csrfToken }) // endpoint, query, csrfToken
    } else {
      setObjs(data['results'])
    }
  }, [objs, data, apiEndpoint, csrfToken, _read])

  return <View fields={fields} data={objs || []} navigateTo={`/${apiEndpoint}`} />
}

export default React.memo(Controller)
