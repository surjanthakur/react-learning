import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './authSlice';

const Store = configureStore({
  reducer: AuthSlice,
});

export default Store;
