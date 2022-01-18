import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { CCard, CCardBody, CCol, CRow, CButton, CFormInput, CForm } from '@coreui/react'
import Table from '../../../UI/Table'

const View = (props) => {
  // const { data, fields, navigateTo } = prop

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
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
