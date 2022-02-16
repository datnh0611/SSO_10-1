import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice'
import formSlice from './form-slice'
import qrCodeSlice from './qrcode-slice'
const Slide = configureStore({
  reducer: {
    auth: authSlice.reducer,
    form: formSlice.reducer,
    qrcode: qrCodeSlice.reducer,
  },
})

export default Slide
