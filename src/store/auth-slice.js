import { createSlice } from '@reduxjs/toolkit'

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
    },
    logout(state, action) {
      state.isLogin = false
      state.user = null
    },
  },
})

export const authActions = slice.actions
export default slice
