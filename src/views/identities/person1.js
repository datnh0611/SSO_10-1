import React, { useState } from 'react'
import DatePickers from './date'
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
  CFormLabel,
  CFormTextarea,
  CFormSelect,
  CButtonGroup,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const Charts = () => {
  var tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Truong Quoc Anh',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Cau Giay' },
      usage: {
        period: '01/01/1999',
      },
      gender: { gender: 'Female' },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Ngo Quang Dat',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Ha Dong' },
      usage: {
        period: '02/02/2000',
      },
      gender: { gender: 'Male' },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Nguyen Huu Dat', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'Ha Tay' },
      usage: {
        period: '06/06/2000',
      },
      gender: { gender: 'Male' },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Nguyen Thi A', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'Cao Bang' },
      usage: {
        period: '03/03/1993',
      },
      gender: { gender: 'Female' },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Nguyen Thu B',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'TP Ho Chi Minh' },
      usage: {
        period: '04/04/1994',
      },
      gender: { gender: 'Female' },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Nguyen Van C',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Ca Mau' },
      usage: {
        period: '05/05/1995',
      },
      gender: { gender: 'Male' },
      activity: 'Last week',
    },
  ]
  const [table, setTable] = useState(tableExample)
  const addIdentifier = () => {
    const tableState = [...table]
    const data =
      '001200013295||Nguyễn Hữu Đạt|29102000|Nam|Thôn Đạo Tú, Quảng Phú Cầu, Ứng Hòa, Hà Nội|10072021'
    const dataArray = data.split('|')
    const row = {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: dataArray[2],
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: dataArray[5] },
      usage: {
        period: dataArray[3],
      },
      gender: { gender: dataArray[4] },
      activity: 'Last week',
    }
    tableState.push(row)
    setTable(tableState)
  }
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
                <DatePickers />
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
                <DatePickers />
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

export default Charts
