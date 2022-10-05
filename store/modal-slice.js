import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    imageURL: '',
    activeModalId: '',
    disableVisitorDevice: false,
    disableAfterSeconds: true,
    disableAfterScroll: true,
    disableTrafficSource: true,
    modalProps: {
      scale: '50',
      size: 's',
      position: 'm',
      positionClassName:
        'absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]',
      imageExist: true,
      isDesktopAvailable: true,
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
      let size;
      if (action.payload === '50') size = 's';
      if (action.payload === '75') size = 'm';
      if (action.payload === '100') size = 'l';
      state.modalProps = { ...state.modalProps, scale: action.payload, size };
    },
    updatePosition(state, action) {
      state.modalProps = {
        ...state.modalProps,
        positionClassName: action.payload[0],
        position: action.payload[1],
      };
    },
    updateContent(state, action) {
      state.modalProps = { ...state.modalProps, ...action.payload };
    },
    switchToggle(state, action) {
      if (action.payload[0] === 'exitIntentTargeting') {
        state.modalProps = {
          ...state.modalProps,
          exitIntentTargeting: action.payload[1],
        };
      }

      state[action.payload[0]] = action.payload[1];
    },
    setAfterSeconds(state, action) {
      state.modalProps = { ...state.modalProps, afterSeconds: +action.payload };
    },
    setAfterScroll(state, action) {
      state.modalProps = { ...state.modalProps, afterScroll: +action.payload };
    },
    setTrafficSource(state, action) {
      state.modalProps = { ...state.modalProps, trafficSource: action.payload };
    },
    setDesktopAvailable(state, action) {
      state.modalProps = {
        ...state.modalProps,
        isDesktopAvailable: action.payload,
      };
    },
    setMobileAvailable(state, action) {
      state.modalProps = {
        ...state.modalProps,
        isMobileAvailable: action.payload,
      };
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
