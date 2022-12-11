import { configureStore } from '@reduxjs/toolkit';
import providerSlice from './providerSlice';

const store = configureStore({
  reducer : {
    providers : providerSlice
  }
})

export default store