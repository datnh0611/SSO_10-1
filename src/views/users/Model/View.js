import React, { useEffect } from 'react'
import useInput from 'src/hooks/use-input'
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

  const { value: username, fetchValue: fetchUsername, onChange: onChangeUsername } = useInput()
  const { value: password, fetchValue: fetchPassword, onChange: onChangePassword } = useInput()
  // const { value: username, fetchValue: fetchUsername, onChange: onChangeUsername } = useInput()

  useEffect(() => {
    fetchUsername(data.username)
  }, [data, fetchUsername])

  const buttonGroup = [
    {
      name: 'Quay lại',
      color: 'secondary',
      className: 'secondary',
      onClick: props.onPost,
      visible: true,
    },
    {
      name: 'Lưu thông tin',
      color: 'success',
      className: 'success',
      onClick: props.paramId ? props.onPut : props.onPost,
      visible: true,
    },
    {
      name: 'Xoá thông tin',
      color: 'danger',
      className: 'danger',
      onClick: props.onDelete,
      visible: true,
    },
    {
      name: 'QR Code',
      color: 'dark',
      className: 'dark',
      onClick: props.onPost,
      visible: true,
    },
  ]
  return (
    <>
      <CCol xs={12}>
        <CForm>
          <div className="mb-4">
            <CButtonGroup role="group" aria-label="Basic example">
              {buttonGroup.map((btn, idx) => (
                <CButton key={idx} color={btn.color} onClick={btn.onClick}>
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
                <CFormInput id="username" value={username} onChange={onChangeUsername} />
              </div>
            </CCol>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="password">Password</CFormLabel>
                <CFormInput id="password" type="password" value={password || ''} disabled />
              </div>
            </CCol>
          </CRow>
          <CRow>
            <h2 className="mb-3">Thông tin người dùng</h2>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">ID Number</CFormLabel>
                <CFormInput disabled />
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
  paramId: PropTypes.string,
  data: PropTypes.object.isRequired,
  onGoBack: PropTypes.func.isRequired,
  onPost: PropTypes.func.isRequired,
  onPut: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default View
