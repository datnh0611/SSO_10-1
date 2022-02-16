import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
// import { formActions } from 'src/store/form-slice.js'
import { qrActions } from 'src/store/qrcode-slice.js'
import { useParams, useHistory } from 'react-router-dom'
import useHttp from 'src/hooks/use-http'
import { handleData, initialObj, keyList, objAttrs } from './Schema.js'
import { getMany, post, putSingle, deleteSingle } from 'src/helpers/crud-helper'
import View from './View'
import { handleQRData } from '../../qrcode/Data'
import { setSubmitData } from 'src/helpers/submit-helper'

const Controller = ({ userId }) => {
  /** HOOKS */
  const param = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  /** API INFO */
  const apiEndpoint = 'identity'
  const collectionEndpoint = 'identities'
  // const { userId } = param
  const { csrf_token: csrfToken, id: authId } = useSelector((state) => state.auth.user)

  /** STATE */
  const [identity, setIdentity] = useState(initialObj)
  const [isFormChanged, setIsFormChanged] = useState(false)
  const { qrScan, qrData } = useSelector((state) => state.qrcode)
  const changeFormHandle = () => setIsFormChanged(true)

  // GET SINGLE
  const { req: _read, data, error } = useHttp(getMany)
  useEffect(() => {
    // if (identityId) {
    //   setIdentity(initialObj)
    //   return
    // }

    /** Fetch data from API */
    console.log('error', error, data)
    if (!error && !data && userId) {
      _read({ apiEndpoint, csrfToken, query: `?user_id=${userId}` })
      return
    }
    /** Fetch data if data from API can be fetch */
    if (!data) {
      return
    }
    const dataHandled = handleData(data)
    setIdentity(dataHandled)
  }, [apiEndpoint, data, error, csrfToken, _read])

  useEffect(() => {
    /** Fetch data if using QR Code Scanner */
    // console.log('qrScan', qrScan)
    if (!qrScan) {
      return
    }
    const dataHandled = handleQRData(qrData, keyList)
    setIdentity({ ...identity, ...dataHandled })
    dispatch(qrActions.clear())
  }, [qrScan, qrData])

  // POST
  const { req: _post } = useHttp(post)
  const postHandler = useCallback(
    async (postData) => {
      if (isFormChanged) {
        await _post({ apiEndpoint, id: postData.id, data: postData, csrfToken })
      }
      // history.push(`/${collectionEndpoint}`)
    },
    [_post, apiEndpoint, csrfToken, isFormChanged],
  )
  // PUT
  const { req: _put } = useHttp(putSingle)
  const putHandler = async (putData) => {
    if (isFormChanged) {
      await _put({ apiEndpoint, id: putData.id, data: putData, csrfToken })
    }
    // history.push(`/${collectionEndpoint}`)
  }
  // DELETE
  const { req: _delete } = useHttp(deleteSingle)
  const deleteHandler = async (id) => {
    await _delete({ apiEndpoint, id, csrfToken })
    // history.push(`/${collectionEndpoint}`)

    // Clear input value after identity being deleted
    setIdentity(initialObj)
  }

  const goBackHandler = () => history.goBack()
  const qrCodeRedirect = () => history.push('/qrcode')

  const handleInputChange = (event) => {
    if (!isFormChanged) {
      changeFormHandle()
    }
    setIdentity({
      ...identity,
      [event.target.name]: event.target.value,
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const submittedData = setSubmitData(objAttrs, { ...identity, userId })
    if (!identity.id) {
      postHandler(submittedData)
    } else {
      putHandler(submittedData)
    }
  }

  // ERROR HANDLER
  // *************
  return (
    <View
      // paramId={id}
      userId={userId}
      data={identity}
      onPost={postHandler}
      onPut={putHandler}
      onDelete={deleteHandler}
      onGoBack={goBackHandler}
      onChange={handleInputChange}
      onSubmit={submitHandler}
      qrCodeRedirect={qrCodeRedirect}
      // isFormChanged={isFormChanged}
      // changeForm={changeFormHandle}
    />
  )
}

Controller.propTypes = {
  userId: PropTypes.string,
  // isUserFormChanged: PropTypes.bool,
}

export default React.memo(Controller)
