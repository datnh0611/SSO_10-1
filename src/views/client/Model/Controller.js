import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import useHttp from 'src/hooks/use-http'
import { handleData } from './Schema.js'
import { getSingle, post, putSingle, deleteSingle } from 'src/helpers/crud-helper'
import View from './View'

const Controller = (props) => {
  /** HOOKS */
  const param = useParams()
  const history = useHistory()

  /** API INFO */
  const apiEndpoint = 'client'
  const collectionEndpoint = 'clients'
  const { clientId: id } = param
  const { csrf_token: csrfToken, id: authId } = useSelector((state) => state.auth.user)

  /** STATE */
  const [client, setClient] = useState({})

  // GET SINGLE
  const { req: _read, data } = useHttp(getSingle)
  useEffect(() => {
    if (!id) {
      setClient({})
      return
    }
    if (!data) {
      _read({ apiEndpoint, id, csrfToken })
    } else {
      const dataHandled = handleData(data)
      setClient(dataHandled)
    }
  }, [id, apiEndpoint, data, csrfToken, _read])

  // POST
  const { req: _post } = useHttp(post)
  const postHandler = useCallback(
    async (postData) => {
      await _post({ apiEndpoint, data: postData, csrfToken })
      history.push(`/${collectionEndpoint}`)
    },
    [_post, apiEndpoint, csrfToken],
  )
  // PUT
  const { req: _put } = useHttp(putSingle)
  const putHandler = async (putData) => {
    await _put({ apiEndpoint, id, data: putData, csrfToken })
    history.push(`/${collectionEndpoint}`)
  }
  // DELETE
  const { req: _delete } = useHttp(deleteSingle)
  const deleteHandler = async () => {
    await _delete({ apiEndpoint, id, csrfToken })
    history.push(`/${collectionEndpoint}`)
  }

  const goBackHandler = () => history.goBack()

  // ERROR HANDLER
  // *************
  return (
    <View
      paramId={id}
      data={client}
      onPost={postHandler}
      onPut={putHandler}
      onDelete={deleteHandler}
      onGoBack={goBackHandler}
    />
  )
}

export default Controller
