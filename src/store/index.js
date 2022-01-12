import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice'

const Slide = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export default Slide
