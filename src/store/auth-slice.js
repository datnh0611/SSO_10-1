import { createSlice } from '@reduxjs/toolkit'
import config from 'src/configs/config'
const initialState = {
  isLogin: false,
  user: null,
}
const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true
      state.user = action.payload

      localStorage.setItem(config.csrfHeaderKey, action.payload[config.csrfKey])
    },
    reLogin(state, action) {
      state.isLogin = true
      state.user = action.payload
      state.user[config.csrfKey] = localStorage.getItem(config.csrfHeaderKey)
    },
    logout(state, action) {
      state.isLogin = false
      state.user = null
      localStorage.removeItem(config.csrfHeaderKey)
    },
  },
})

export const authActions = slice.actions
export default slice
