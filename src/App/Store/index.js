import { configureStore } from '@reduxjs/toolkit';
import { storeTest } from './storeTest';

export default configureStore({
  reducer: {
    testSlice: storeTest.reducer,
  },
});
