import React, { useEffect, useState } from 'react'
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
  const { url, apiPrefix } = Config

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
    // ;(async () => {
    //   if (!userData) {
    //     await _read(apiEndpoint, userId)
    //     console.log('userData', userData)
    //   } else {
    //     setUser(userData)
    //   }
    // })()
    if (!userData) {
      _read(apiEndpoint, userId)
      console.log('userData', userData)
    } else {
      setUser(userData)
    }
  }, [userId, apiEndpoint, _read, userData])

  // POST
  const { req: _post } = useHttp(post)
  const postHandler = async (postData) => {
    await _post(apiEndpoint, postData)
    history.push(`/${collectionEndpoint}`)
  }

  // PUT
  const { req: _put } = useHttp(putSingle)
  const putHandler = async (putData) => {
    await _put(apiEndpoint, userId, putData)
    history.push(`/${collectionEndpoint}`)
  }

  // DELETE
  const { req: _delete } = useHttp(deleteSingle)
  const deleteHandler = async () => {
    await _delete(apiEndpoint, userId)
    history.push(`/${collectionEndpoint}`)
  }

  return (
    <View
      paramId={userId}
      data={user}
      onPost={postHandler}
      onPut={putHandler}
      onDelele={deleteHandler}
      onGoBack={goBackHandler}
    />
  )
}

export default Controller
