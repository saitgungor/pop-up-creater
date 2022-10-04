import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    imageExist: true,
    imageURL: '',
    activeModalId: '',
    modalProps: {
      scale: '100',
      position: 'm',
      positionClassName:
        'absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]',
    },
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
      state.modalProps = { ...state.modalProps, scale: action.payload };
    },
    updatePosition(state, action) {
      console.log(action);
      state.modalProps = {
        ...state.modalProps,
        positionClassName: action.payload[0],
        position: action.payload[1],
      };
    },
    updateContent(state, action) {
      state.modalProps = { ...state.modalProps, ...action.payload };
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
