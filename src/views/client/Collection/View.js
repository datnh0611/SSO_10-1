import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CFormInput,
  CForm,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CModalContent,
} from '@coreui/react'
import Table from '../../../UI/Table'

const View = (props) => {
  // const { data, fields, navigateTo } = props
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
              <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader>
                  <CModalTitle>Single Sign-On</CModalTitle>
                </CModalHeader>
                <CModalBody className="text-center">Choose your account</CModalBody>
                <CModalContent className="text-center">abc</CModalContent>
                <CModalContent className="text-center">xyz</CModalContent>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                  <CButton color="primary">Save changes</CButton>
                </CModalFooter>
              </CModal>
              <br />
              <CForm className="d-flex">
                <CFormInput className="me-sm-2" placeholder="Search..." size="sm" />
                <CButton color="light" className="my-2 my-sm-0" type="submit">
                  Search
                </CButton>
              </CForm>
              <br />
              <CButton className="mb-3">
                <Link to={'/client'} style={{ textDecoration: 'none', color: 'inherit' }}>
                  Thêm
                </Link>
              </CButton>
              <Table {...props} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

View.propTypes = {
  data: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  navigateTo: PropTypes.string.isRequired,
}

export default View
