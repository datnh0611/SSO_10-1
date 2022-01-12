import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
}
const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true
    },
    logout(state, action) {
      state.isLogin = false
    },
  },
})

export const authActions = slice.actions
export default slice
