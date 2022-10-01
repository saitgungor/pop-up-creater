import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    imageExist: true,
    imageURL: '',
  },
  reducers: {
    updateImageSrc(state, action) {
      state.imageURL = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
