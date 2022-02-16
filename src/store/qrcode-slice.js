import { createSlice } from '@reduxjs/toolkit'
import config from 'src/configs/config'
const initialState = {
  qrData: null,
  qrScan: false,
}
// const initialState = []
const slice = createSlice({
  name: 'qrcode',
  initialState: initialState,
  reducers: {
    scan(state, action) {
      const { qrData, qrScan } = action.payload
      // console.log('action.payload', action.payload)
      state.qrData = qrData
      state.qrScan = qrScan
    },
    clear(state) {
      state.qrData = null
      state.qrScan = false
    },
  },
})

export const qrActions = slice.actions
export default slice
