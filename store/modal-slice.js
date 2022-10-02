import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    imageExist: true,
    imageURL: '',
    activeModalId: '',
    modalProps: { size: 's', position: 'm' },
  },
  reducers: {
    updateImageSrc(state, action) {
      state.imageURL = action.payload;
      state.modalProps = { ...state.modalProps, imgSrc: action.payload };
    },
    selectModalHandler(state, action) {
      state.activeModalId = action.payload;
    },
    updateModalProps(state, action) {
      state.modalProps = { ...state.modalProps, ...action.payload };
    },
    updateColor(state, action) {
      state.modalProps = { ...state.modalProps, color: action.payload };
    },
    updateSize(state, action) {
      state.modalProps = { ...state.modalProps, size: action.payload };
    },
    updatePosition(state, action) {
      state.modalProps = { ...state.modalProps, position: action.payload };
    },
    updateContent(state, action) {
      state.modalProps = { ...state.modalProps, ...action.payload };
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
