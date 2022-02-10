import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import useHttp from 'src/hooks/use-http'
import { getSingle, post, putSingle, deleteSingle } from 'src/helpers/crud-helper'
import Config from '../../../configs/config'
import View from './View'

const Controller = (props) => {
  /** HOOKS */
  const param = useParams()
  const history = useHistory()

  /** API INFO */
  const apiEndpoint = 'user'
  const collectionEndpoint = 'users'
  const { userId: id } = param
  const { csrf_token: csrfToken, id: authId } = useSelector((state) => state.auth.user)

  /** STATE */
  const [user, setUser] = useState({})

  const goBackHandler = () => history.goBack()

  // GET SINGLE
  const { req: _read, data } = useHttp(getSingle)

  useEffect(() => {
    if (!id) {
      setUser({})
      return
    }
    /** Tim hieu lai vi sao code the nay? */
    if (!data) {
      _read(apiEndpoint, id, csrfToken)
      console.log('data', data)
    } else {
      setUser(data)
    }
  }, [id, apiEndpoint, _read, data, csrfToken])

  // POST
  const { req: _post } = useHttp(post)
  const postHandler = async (postData) => {
    await _post(apiEndpoint, postData, csrfToken)
    history.push(`/${collectionEndpoint}`)
  }

  // PUT
  const { req: _put } = useHttp(putSingle)
  const putHandler = async (putData) => {
    await _put(apiEndpoint, id, putData, csrfToken)
    history.push(`/${collectionEndpoint}`)
  }

  // DELETE
  const { req: _delete } = useHttp(deleteSingle)
  const deleteHandler = async () => {
    await _delete(apiEndpoint, id, csrfToken)
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
    />
  )
}

export default Controller
