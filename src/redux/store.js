import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from './controller/counterSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})