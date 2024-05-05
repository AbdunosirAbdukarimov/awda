import { configureStore } from '@reduxjs/toolkit'
import authService from '../slice/auth'

const store = configureStore({
  reducer: {
    auth: authService,
  },

  // devTools: process.env.NODE_ENV !== "production",
})

export default store