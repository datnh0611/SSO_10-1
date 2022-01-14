import React, { useState } from 'react'
// import DatePickers from './date'
import { DatePicker } from '@progress/kendo-react-dateinputs'
import {
  CAvatar,
  CCard,
  CCardBody,
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
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'

const View = () => {
  return (
    <>
      <CCol xs={12}>
        <CForm>
          <div className="mb-4">
            <CButtonGroup role="group" aria-label="Basic example">
              <CButton color="success">Save</CButton>
              <CButton color="danger">Delete</CButton>
              <CButton color="primary">Read QR Code</CButton>
            </CButtonGroup>
          </div>
          <CRow>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">ID Number</CFormLabel>
                <CFormInput />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Previous ID Number</CFormLabel>
                <CFormInput />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Date Register</CFormLabel>
                {/* <DatePickers /> */}
                <>
                  <div className="k-my-4">
                    <DatePicker format="dd-MM-yyyy" />
                  </div>
                </>
              </div>
            </CCol>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Full Name</CFormLabel>
                <CFormInput />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Gender</CFormLabel>
                <CFormSelect id="floatingSelect" aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Date of Birth</CFormLabel>
                {/* <DatePickers /> */}
                <>
                  <div className="k-my-4">
                    <DatePicker format="dd-MM-yyyy" />
                  </div>
                </>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Address</CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
              </div>
            </CCol>
          </CRow>
        </CForm>
      </CCol>
    </>
  )
}

export default View
