import React from 'react'
import PropTypes from 'prop-types'
import {
  CAvatar,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CFormInput,
  CForm,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const View = (props) => {
  console.log('props', props)
  const { users } = props

  const strings = () => {
    const string =
      '001200013295||Nguyễn Hữu Đạt|29102000|Nam|Thôn Đạo Tú, Quảng Phú Cầu, Ứng Hòa, Hà Nội|10072021'
    const stringList = string.split('|')
    for (let i = 0; i < stringList.length; i++) {
      alert(stringList[i])
    }
  }
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <br />
              <CForm className="d-flex">
                <CFormInput className="me-sm-2" placeholder="Search..." size="sm" />
                <CButton color="light" className="my-2 my-sm-0" type="submit" onClick={strings}>
                  Search
                </CButton>
              </CForm>
              <br />
              <CButton className="mb-3">Add Identifier</CButton>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Full name</CTableHeaderCell>
                    <CTableHeaderCell>Date of birth</CTableHeaderCell>
                    <CTableHeaderCell>Address</CTableHeaderCell>
                    <CTableHeaderCell>Gender</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        {/* <CTableDataCell className="text-center"> */}
                        <div>{item.usage.period}</div>
                        {/* </CTableDataCell> */}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.country.name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.gender.gender}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

View.propTypes = {
  users: PropTypes.array.isRequired,
}

export default View
