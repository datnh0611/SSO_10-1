import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import formatHelper from '../helpers/formatingHelper'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import NoResultNoti from './NoResultNotification'

const nonValue = 'Không có'

const Table = (props) => {
  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="dark">
        <CTableRow>
          {/* <CTableHeaderCell>STT</CTableHeaderCell>
          <CTableHeaderCell>Tên đăng nhập</CTableHeaderCell>
          <CTableHeaderCell>Ngày đăng ký</CTableHeaderCell>
          <CTableHeaderCell>Trạng thái</CTableHeaderCell> */}
          {props.fields.map((field, index) => (
            <CTableHeaderCell key={index}>{field.label}</CTableHeaderCell>
          ))}
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {!props.data.length ? (
          <NoResultNoti colSpan={props.fields.length} />
        ) : (
          props.data.map((data, index) => (
            <CTableRow v-for="item in tableItems" key={data.id}>
              {props.fields.map((field, index) => {
                // CONDITIONAL TEMPLATE
                let dataView
                if (field.hasOwnProperty('template')) {
                  dataView = field['template'](data)
                } else {
                  dataView = data[field['field']] ? data[field['field']] : nonValue
                }

                return (
                  <CTableDataCell key={formatHelper.generateId()} className="text-left">
                    <Link
                      to={`${props.navigateTo}/${data.id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {dataView}
                    </Link>
                  </CTableDataCell>
                )
              })}
            </CTableRow>
            // </Link>
          ))
        )}
      </CTableBody>
    </CTable>
  )
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  navigateTo: PropTypes.string.isRequired,
}

export default Table
