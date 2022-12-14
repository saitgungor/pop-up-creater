import { createSlice, current } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    imageURL: '',
    activeModalId: '',
    disableVisitorDevice: false,
    disableAfterSeconds: true,
    disableAfterScroll: true,
    disableTrafficSource: true,
    showCode: false,
    modalProps: {
      scale: 'scale-50',
      size: 's',
      position: 'm',
      positionClassName:
        'absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]',
      isDesktopAvailable: true,
    },
  },
  reducers: {
    resetModal(state, action) {
      state.activeModalId = '';
      state.modalProps = {
        scale: 'scale-50',
        size: 's',
        position: 'm',
        positionClassName:
          'absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]',
        imageExist: true,
        isDesktopAvailable: true,
      };
      state.imageURL = '';
    },

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
      if (action.payload === 'scale-50') size = 's';
      if (action.payload === 'scale-75') size = 'm';
      if (action.payload === 'scale-100') size = 'l';
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
    setSendFormData(state, action) {
      state.modalProps = { ...state.modalProps, sendFormData: action.payload };
    },
    setSendClickData(state, action) {
      state.modalProps = { ...state.modalProps, sendClickData: action.payload };
    },
    showCode(state, action) {
      state.showCode = true;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
