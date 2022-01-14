import React from 'react'
import PropTypes from 'prop-types'
import { CTableDataCell, CTableRow } from '@coreui/react'

const NoResultNoti = (props) => {
  return (
    <CTableRow className="text-center">
      <CTableDataCell className={`${props.className}`} colSpan={props.colSpan}>
        {props.lang === 'en' ? 'No record found' : 'Không có dữ liệu'}
      </CTableDataCell>
    </CTableRow>
  )
}

NoResultNoti.propTypes = {
  colSpan: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
}

export default NoResultNoti
