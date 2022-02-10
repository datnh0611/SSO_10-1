import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import useHttp from 'src/hooks/use-http'
import { clientObj, clientAttrs } from './Schema.js'
import formatingHelper from '../../../helpers/formatingHelper'
import { getSingle, post, putSingle, deleteSingle } from 'src/helpers/request-helper'
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

  const handleData = useCallback((data) => {
    console.log('data', data)
    const clientMetadata = JSON.parse(data['_client_metadata'])
    const result = {}
    for (const key in clientAttrs) {
      // get from data
      if (data.hasOwnProperty(clientAttrs[key].key)) {
        switch (clientAttrs[key].type) {
          case 'date': {
            result[key] = formatingHelper.timestampToDate(data[clientAttrs[key].key])
            break
          }
          // case 'list': {
          //   break
          // }
          // case 'number': {
          //   break
          // }
          default:
            result[key] = data[clientAttrs[key].key]
        }
      }
      // get from metaData
      if (clientMetadata.hasOwnProperty(clientAttrs[key].key)) {
        switch (clientAttrs[key].type) {
          // case 'date': {
          //   break
          // }
          case 'list': {
            if (!data[clientAttrs[key].key] instanceof Array) {
              result[key] = clientMetadata[clientAttrs[key].key].split()
              break
            }
            result[key] = clientMetadata[clientAttrs[key].key]
            break
          }
          // case 'number': {
          //   break
          // }
          default:
            result[key] = clientMetadata[clientAttrs[key].key]
        }
      }
    }
    console.log('result', result)
    return result
  }, [])

  const goBackHandler = () => history.goBack()

  // GET SINGLE
  const { req: _read, data: data } = useHttp(getSingle)
  useEffect(() => {
    if (!id) {
      setClient({})
      return
    }
    if (!data) {
      _read(apiEndpoint, id, csrfToken)
      // console.log('data', data)
    } else {
      const dataHandled = handleData(data)
      setClient(dataHandled)
    }
  }, [id, apiEndpoint, _read, data, handleData])

  // POST
  const { req: _post } = useHttp(post)
  const postHandler = async (postData) => {
    await _post(apiEndpoint, postData, csrfToken)
    history.push(`/${collectionEndpoint}`)
  }

  // PUT
  const { req: _put } = useHttp(putSingle)
  const putHandler = async (putData) => {
    try {
      await _put(apiEndpoint, id, putData, csrfToken)
      history.push(`/${collectionEndpoint}`)
    } catch (error) {
      console.log(error)
    }
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
      data={client}
      onPost={postHandler}
      onPut={putHandler}
      onDelete={deleteHandler}
      onGoBack={goBackHandler}
    />
  )
}

export default Controller
