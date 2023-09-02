import { createSlice } from '@reduxjs/toolkit';

export const storeTest = createSlice({
  name: 'store-test',
  initialState: { profile: 'retail' },
  reducers: {
    toggleProfile: (sliceState) => {
      if (sliceState.profile === 'retail') {
        sliceState.profile = 'business';
      } else {
        sliceState.profile = 'retail';
      }
    },
  },
});

export const { toggleProfile } = storeTest.actions;
