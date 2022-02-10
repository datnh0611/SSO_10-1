import React from 'react'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import {
  CCard,
  CCardBody,
  CRow,
  CButton,
  CButtonGroup,
  CCardHeader,
  CCardTitle,
  CCardText,
} from '@coreui/react'

const View = (props) => {
  return (
    <>
      <CRow>
        <CCard style={{ margin: '10rem auto', width: '45%' }}>
          <CCardHeader>
            <h5>Sign in with SSO</h5>
          </CCardHeader>
          <CCardBody className="text-center mt-4">
            <h2>Consent request</h2>
            <CCardText className="pt-1">to continue with Client</CCardText>
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
              <CButton color="success" className="mx-1">
                Accept
              </CButton>
              <CButton color="danger" className="mx-1">
                Deny
              </CButton>
            </CButtonGroup>
          </CCardBody>
          <CCardBody>
            <CCardText>To contiune, SSO will share your name, email address with Client</CCardText>
          </CCardBody>
        </CCard>
      </CRow>
      {/* <CRow>
        <CCol>
          <CCard className="mb-4">
            <CCardBody style={{ marginTop: '10%' }}>
              <CForm className="d-flex">
                <CCol xs="4"></CCol>
                <CCol xs="4">
                  <CTable>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">Single Sign-on</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <br></br>
                    <h3 className="text-center">Choose your account</h3>
                    <br></br>
                    <br></br>
                    <CTableBody>
                      <CTableRow>
                        <CTableDataCell>Trương Quốc Anh</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>Nguyễn Hữu Đạt</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>Ngô Quang Đạt</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>Use another account</CTableDataCell>
                      </CTableRow>
                      <CTableDataCell className="text-center">
                        <CButtonGroup
                          role="group"
                          aria-label="Basic example"
                          style={{ textAlignVertical: 'center', textAlign: 'center' }}
                        >
                          <CButton color="success">Đồng ý</CButton>
                          <CButton color="danger">Hủy bỏ</CButton>
                        </CButtonGroup>
                      </CTableDataCell>
                    </CTableBody>
                  </CTable>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </>
  )
}

export default View
