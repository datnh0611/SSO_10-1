import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { initialObj, objAttrs } from './Schema.js'
import {
  CCol,
  CRow,
  CButton,
  CFormInput,
  CForm,
  CFormLabel,
  CFormTextarea,
  CFormSelect,
  CButtonGroup,
} from '@coreui/react'
import { setSubmitData } from 'src/helpers/submit-helper'

const View = (props) => {
  const { data, userId } = props

  const buttonGroup = [
    // {
    //   name: 'Back',
    //   color: 'secondary',
    //   className: 'secondary',
    //   onClick: props.onGoBack,
    //   visible: true,
    // },
    {
      name: 'Save',
      color: 'success',
      className: 'success',
      type: 'submit',
      // onClick: props.paramId ? props.onPut : props.onPost,
      visible: true,
    },
    {
      name: 'Scan QR Code',
      color: 'primary',
      className: 'primary',
      // type: 'submit',
      onClick: props.qrCodeRedirect,
      visible: true,
    },
    {
      name: 'Delete',
      color: 'danger',
      className: 'danger',
      // type: 'submit',
      onClick: () => {
        props.onDelete(data.id)
        // setdata(initialObj)
      },
      visible: data && data.id,
    },
  ]

  return (
    <>
      {/* <CCol xs={12}> */}
      <h2 className="mb-3">Thông tin người dùng</h2>
      <CForm onSubmit={props.onSubmit}>
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
          <CCol xs={6}>
            <div className="mb-3">
              <CFormLabel htmlFor="">Email</CFormLabel>
              <CFormInput
                id="email"
                name="email"
                value={data.email}
                onChange={props.onChange}
                disabled={objAttrs.email.disabled}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="username">ID Number</CFormLabel>
              <CFormInput
                id="idNumber"
                name="idNumber"
                value={data.idNumber}
                onChange={props.onChange}
                disabled={objAttrs.idNumber.disabled}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="datauri">Previous ID Number</CFormLabel>
              <CFormInput
                id="previousIDNumber"
                name="previousIDNumber"
                value={data.previousIDNumber}
                onChange={props.onChange}
                disabled={objAttrs.previousIDNumber.disabled}
              />
            </div>
            {/* {props.paramId && ( */}

            <div className="mb-3">
              <CFormLabel htmlFor="username">Date Register</CFormLabel>
              <CFormInput
                id="dateRegister"
                name="dateRegister"
                value={data.dateRegister}
                onChange={props.onChange}
                disabled={objAttrs.dateRegister.disabled}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="username">Address</CFormLabel>
              <CFormTextarea
                id="address"
                name="address"
                rows="5"
                value={data.address}
                onChange={props.onChange}
                disabled={objAttrs.address.disabled}
              />
            </div>
          </CCol>
          <CCol xs={6}>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Phone Number</CFormLabel>
              <CFormInput
                id="phoneNumber"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={props.onChange}
                disabled={objAttrs.phoneNumber.disabled}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="">Full name</CFormLabel>
              <CFormInput
                id="fullName"
                name="fullName"
                value={data.fullName}
                onChange={props.onChange}
                disabled={objAttrs.fullName.disabled}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="">Date of Birth</CFormLabel>
              <CFormInput
                id="dateBirth"
                name="dateBirth"
                value={data.dateBirth}
                onChange={props.onChange}
                disabled={objAttrs.dateBirth.disabled}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="">Gender</CFormLabel>
              <CFormInput
                id="gender"
                name="gender"
                aria-label="Floating label select example"
                value={!data.gender || data.gender === 0 ? 'Male' : 'Female'}
                onChange={props.onChange}
                disabled={objAttrs.gender.disabled}
              />
            </div>
          </CCol>
        </CRow>
      </CForm>
      {/* </CCol> */}
    </>
  )
}

View.propTypes = {
  paramId: PropTypes.string,
  userId: PropTypes.string,
  data: PropTypes.object.isRequired,
  onGoBack: PropTypes.func.isRequired,
  onPost: PropTypes.func.isRequired,
  onPut: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isFormChanged: PropTypes.bool,
  changeForm: PropTypes.func,
  qrCodeRedirect: PropTypes.func,
}

export default React.memo(View)
