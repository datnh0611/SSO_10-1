import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import useHttp from 'src/hooks/use-http'
import { getSingle, post, putSingle, deleteSingle } from 'src/helpers/request-helper'
import Config from '../../../configs/config'
import View from './View'

const Controller = (props) => {
  /** HOOKS */
  const param = useParams()
  const history = useHistory()

  /** API INFO */
  const apiEndpoint = 'user'
  const collectionEndpoint = 'users'
  const userId = param.userId
  const { csrf_token: csrfToken, id } = useSelector((state) => state.auth.user)

  /** STATE */
  const [user, setUser] = useState({})

  const goBackHandler = () => history.goBack()

  // GET SINGLE
  const { req: _read, data: userData } = useHttp(getSingle)

  useEffect(() => {
    if (!userId) {
      setUser({})
      return
    }
    /** Tim hieu lai vi sao code the nay? */
    if (!userData) {
      _read(apiEndpoint, userId, csrfToken)
      console.log('userData', userData)
    } else {
      setUser(userData)
    }
  }, [userId, apiEndpoint, _read, userData])

  // POST
  const { req: _post } = useHttp(post)
  const postHandler = async (postData) => {
    await _post(apiEndpoint, postData, csrfToken)
    history.push(`/${collectionEndpoint}`)
  }

  // PUT
  const { req: _put } = useHttp(putSingle)
  const putHandler = async (putData) => {
    await _put(apiEndpoint, userId, putData, csrfToken)
    history.push(`/${collectionEndpoint}`)
  }

  // DELETE
  const { req: _delete } = useHttp(deleteSingle)
  const deleteHandler = async () => {
    await _delete(apiEndpoint, userId, csrfToken)
    history.push(`/${collectionEndpoint}`)
  }

  return (
    <View
      paramId={userId}
      data={user}
      onPost={postHandler}
      onPut={putHandler}
      onDelete={deleteHandler}
      onGoBack={goBackHandler}
    />
  )
}

export default Controller
