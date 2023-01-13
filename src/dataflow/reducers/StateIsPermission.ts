import { createSlice } from '@reduxjs/toolkit';

export const StateIsPermission = createSlice({
  name: 'stateIsPermission',
  initialState: { isValuePermission: false },
  reducers: {
    isItemAddValuePermission: (state, action) => {
      state.isValuePermission = action.payload;
    },
  },
});

export const { isItemAddValuePermission } = StateIsPermission.actions;
