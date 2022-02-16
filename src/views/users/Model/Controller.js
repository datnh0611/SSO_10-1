import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { formActions } from 'src/store/form-slice'
import useHttp from 'src/hooks/use-http'
import { getSingle, post, putSingle, deleteSingle } from 'src/helpers/crud-helper'
import userConfig from '../config'

import View from './View'

const Controller = (props) => {
  /** HOOKS */
  const param = useParams()
  const history = useHistory()
  // const dispatch = useDispatch()

  /** API INFO */
  const { apiEndpoint, collectionEndpoint } = userConfig
  const { userId: id } = param
  const { csrf_token: csrfToken, id: authId } = useSelector((state) => state.auth.user)

  /** STATE */
  const [user, setUser] = useState({})
  const [isFormChanged, setIsFormChanged] = useState(false)

  const changeFormHandle = () => setIsFormChanged(true)
  const goBackHandler = () => history.goBack()

  // GET SINGLE
  const { req: _readUser, data: userData } = useHttp(getSingle)

  useEffect(() => {
    if (!id) {
      setUser({})
      return
    }
    if (!userData) {
      _readUser({ apiEndpoint, id, csrfToken })
    } else {
      setUser(userData)
    }
  }, [id, apiEndpoint, _readUser, userData, csrfToken])

  // POST
  const { req: _post } = useHttp(post)
  const postHandler = async (postData) => {
    if (isFormChanged) {
      await _post({ apiEndpoint, data: postData, csrfToken })
    }
    history.push(`/${collectionEndpoint}`)
  }

  // PUT
  const { req: _put } = useHttp(putSingle)
  const putHandler = async (putData) => {
    if (isFormChanged) {
      await _put({ apiEndpoint, id, data: putData, csrfToken })
    }
    history.push(`/${collectionEndpoint}`)
  }

  // DELETE
  const { req: _delete } = useHttp(deleteSingle)
  const deleteHandler = async () => {
    await _delete({ apiEndpoint, id, csrfToken })
    history.push(`/${collectionEndpoint}`)
  }

  return (
    <View
      paramId={id}
      data={user}
      onPost={postHandler}
      onPut={putHandler}
      onDelete={deleteHandler}
      onGoBack={goBackHandler}
      isFormChanged={isFormChanged}
      changeForm={changeFormHandle}
      // formNotChangedHandler={formNotChangedHandler}
    />
  )
}

export default Controller
