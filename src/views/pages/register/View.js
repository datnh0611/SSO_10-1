import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import useInput from '../../../hooks/use-input'

const View = (props) => {
  const history = useHistory()
  const { value: username, onChange: onChangeUsername } = useInput()
  const { value: password, onChange: onChangePassword } = useInput()
  const { value: confirmPassword, onChange: onChangeConfirmPassword } = useInput()

  const { onSubmit, checkPassword } = props
  const submitHandler = async (event) => {
    event.preventDefault()
    if (!checkPassword(password, confirmPassword)) {
      console.log('Password need to equal with Confirm Password!')
      return
    }
    const data = {
      username,
      password,
    }
    // props.onSubmit(data)
    onSubmit(data)
    history.push('/login')
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={submitHandler}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={onChangeUsername}
                      value={username}
                      placeholder="Username"
                      autoComplete="username"
                    />
                  </CInputGroup>
                  {/* <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" />
                  </CInputGroup> */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      value={password}
                      onChange={onChangePassword}
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      value={confirmPassword}
                      onChange={onChangeConfirmPassword}
                      type="password"
                      placeholder="Confirm password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type="submit">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

View.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  checkPassword: PropTypes.func.isRequired,
}

export default View
