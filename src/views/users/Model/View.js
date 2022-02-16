import React, { useEffect, useState } from 'react'
// import useInput from 'src/hooks/use-input'
import PropTypes from 'prop-types'
import { setSubmitData } from 'src/helpers/submit-helper'
import { initialObj as userObj, objAttrs as userAttrs } from './Schema.js'
// import { DatePicker } from '@progress/kendo-react-dateinputs'
import {
  CCol,
  CRow,
  CButton,
  CFormInput,
  CForm,
  CFormLabel,
  // CFormTextarea,
  // CFormSelect,
  CButtonGroup,
} from '@coreui/react'
import IdentityView from '../../identities/Model/Controller'
// import config from '../config'

const View = (props) => {
  const { data } = props

  const [user, setUser] = useState({})

  const handleInputChange = (event) => {
    // Change form state
    if (!props.isFormChanged) {
      props.changeForm()
    }
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    if (!Object.keys(data).length) {
      return
    }
    setUser(data)
  }, [data])

  const submitHandler = (event) => {
    event.preventDefault()
    const submittedData = setSubmitData(userAttrs, user)
    if (!props.paramId) {
      props.onPost(submittedData)
    } else {
      props.onPut(submittedData)
    }
  }

  const buttonGroup = [
    {
      name: 'Back',
      color: 'secondary',
      className: 'secondary',
      onClick: props.onGoBack,
      visible: true,
    },
    {
      name: 'Save',
      color: 'success',
      className: 'success',
      type: 'submit',
      // onClick: props.paramId ? props.onPut : props.onPost,
      visible: true,
    },
    {
      name: 'Delete',
      color: 'danger',
      className: 'danger',
      // type: 'submit',
      onClick: props.onDelete.bind(null, props.paramId),
      visible: true,
    },
  ]
  return (
    <>
      <CCol xs={12}>
        <CForm onSubmit={submitHandler}>
          <div className="mb-4">
            <CButtonGroup role="group" aria-label="Basic example">
              {buttonGroup.map((btn, idx) => (
                <CButton
                  key={idx}
                  type={btn.type || 'button'}
                  color={btn.color}
                  onClick={btn.onClick}
                  disabled={!btn.visible}
                >
                  {btn.name}
                </CButton>
              ))}
            </CButtonGroup>
          </div>
          <CRow className="mb-4">
            <h2 className="mb-3">Thông tin đăng nhập</h2>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="username">Username</CFormLabel>
                <CFormInput
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleInputChange}
                  disabled={userAttrs.username.disabled}
                />
              </div>
            </CCol>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="password">Password</CFormLabel>
                <CFormInput
                  id="password"
                  name="password"
                  type="password"
                  value={user.password}
                  disabled={userAttrs.password.disabled}
                  onChange={handleInputChange}
                />
              </div>
            </CCol>
          </CRow>
        </CForm>
        <IdentityView userId={props.paramId} />
      </CCol>
    </>
  )
}

View.propTypes = {
  paramId: PropTypes.string,
  data: PropTypes.object.isRequired,
  onGoBack: PropTypes.func.isRequired,
  onPost: PropTypes.func.isRequired,
  onPut: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isFormChanged: PropTypes.bool,
  changeForm: PropTypes.func,
  // formNotChangedHandler: PropTypes.func,
}

export default View
