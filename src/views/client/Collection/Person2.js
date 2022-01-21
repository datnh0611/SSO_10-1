import React from 'react'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CForm,
  CTable,
  CTabContent as CTableContent,
  CTableBody,
  CTableHead,
  CTableFoot,
  CTableDataCell,
  CTableRow,
  CTableHeaderCell,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CAvatar,
  CButton,
  CButtonGroup,
} from '@coreui/react'

const Person2 = () => {
  return (
    <>
      <CRow>
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
      </CRow>
    </>
  )
}

export default Person2
