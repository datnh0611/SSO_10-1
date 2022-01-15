import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from '@progress/kendo-react-dateinputs'
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

const View = (props) => {
  const { data } = props
  console.log('data', data)
  return (
    <>
      <CCol xs={12}>
        <CForm>
          <div className="mb-4">
            <CButtonGroup role="group" aria-label="Basic example">
              <CButton color="secondary" onClick={props.onGoBack}>
                Quay lại
              </CButton>
              <CButton color="success">Lưu thông tin</CButton>
              <CButton color="danger">Xoá thông tin</CButton>
              <CButton color="dark">QR Code</CButton>
            </CButtonGroup>
          </div>
          <CRow className="mb-4">
            <h2 className="mb-3">Thông tin đăng nhập</h2>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="username">Username</CFormLabel>
                <CFormInput id="username" value={data.username} />
              </div>
            </CCol>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="password">Password</CFormLabel>
                <CFormInput id="password" type="password" value={data.password || ''} />
              </div>
            </CCol>
          </CRow>
          <CRow>
            <h2 className="mb-3">Thông tin người dùng</h2>
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

View.propTypes = {
  data: PropTypes.object.isRequired,
  onGoBack: PropTypes.func.isRequired,
}

export default View
