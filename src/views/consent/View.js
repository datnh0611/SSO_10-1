import React from 'react'
import PropTypes from 'prop-types'

import {
  CCard,
  CCardBody,
  CRow,
  CButton,
  CButtonGroup,
  CCardHeader,
  CCardText,
} from '@coreui/react'

const View = ({ client, user, onAccept, onDeny }) => {
  const userGroup = []
  const buttonGroup = [
    {
      name: 'Accept',
      color: 'success',
      className: 'mx-1',
      onClick: onAccept,
      visible: true,
    },
    {
      name: 'Deny',
      color: 'danger',
      className: 'mx-1',
      onClick: onDeny,
      visible: true,
    },
  ]
  return (
    <>
      <CRow>
        <CCard style={{ margin: '10rem auto', width: '49%' }}>
          <CCardHeader>
            <h5>Sign in with SSO</h5>
          </CCardHeader>
          <CCardBody className="text-center mt-4">
            <h2>Consent request</h2>
            <CCardText className="pt-1">to continue with {client.client_name}</CCardText>
            {/* <div>
              <CTable className="text-start">
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Teomoney</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Hello</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div> */}

            <CButtonGroup
              role="group"
              aria-label="Basic example"
              style={{ textAlignVertical: 'center', textAlign: 'center' }}
              className="mt-3"
            >
              {buttonGroup.map((btn) => (
                <CButton
                  color={btn.color}
                  className={btn.className}
                  onClick={btn.onClick}
                  key={btn.name}
                >
                  {btn.name}
                </CButton>
              ))}
            </CButtonGroup>
          </CCardBody>
          <CCardBody>
            <CCardText>
              To contiune, SSO will share your name, email address with {client.client_name}
            </CCardText>
          </CCardBody>
        </CCard>
      </CRow>
    </>
  )
}

View.propTypes = {
  user: PropTypes.object,
  client: PropTypes.object,
  onAccept: PropTypes.func,
  onDeny: PropTypes.func,
}

export default View
