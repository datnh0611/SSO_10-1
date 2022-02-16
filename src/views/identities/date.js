import React from 'react'
import { DatePicker } from '@progress/kendo-react-dateinputs'

export default function DatePickers() {
  return (
    <>
      <div className="k-my-4">
        <DatePicker format="dd-MM-yyyy" />
      </div>
    </>
  )
}
