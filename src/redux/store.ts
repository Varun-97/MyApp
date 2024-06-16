// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/loginSlice';
import homeReducer from './slice/homeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer
  },
});