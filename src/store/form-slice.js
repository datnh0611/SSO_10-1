import { createSlice } from '@reduxjs/toolkit'
import config from 'src/configs/config'
const initialState = {
  obj: null,
  method: false,
  data: null,
  isSubmit: false,
}
// const initialState = []
const slice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    submit(state, action) {
      console.log('SUBMIT REDUX')
      // const {obj, method,isSubmit}
      for (const key in initialState) {
        state[key] = action.payload[key]
      }
      // state.obj = obj
      // state.method =
    },
    clearout(state) {
      state = initialState
    },
  },
})

export const formActions = slice.actions
export default slice
