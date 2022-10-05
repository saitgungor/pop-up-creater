import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../store/modal-slice';

const Modal_2 = () => {
  const dispatch = useDispatch();
  const initialModalProps = {
    id: '2',
    imgSrc: '/images/modal-2-banner.png',
    content1: 'Install local now',
    content2: 'We’ve gone native, try it!',
    contentCount: 2,
    color: '#7D4AEA',
    isUpdated: true,
  };

  const activeModalId = useSelector(state => state.modal.activeModalId);
  useEffect(() => {
    if (activeModalId !== initialModalProps.id) return;
    dispatch(modalActions.updateModalProps(initialModalProps));
  }, [dispatch]);
  const modalProps = useSelector(state => state.modal.modalProps);
  const activeProps = modalProps.isUpdated ? modalProps : initialModalProps;
  let color;
  if (activeProps.color === '#ffffff') {
    color = 'bg-white';
  } else if (activeProps.color === '#000000') {
    color = 'bg-black';
  } else {
    color = `bg-[${activeProps.color}]`;
  }

  const classNames = `${activeProps.positionClassName} ${activeProps.scale}`;

  return (
    <div
      className={`flex flex-col items-center bg-white w-120 h-150 rounded-lg relative ${classNames}`}
    >
      <div className="max-h-75">
        <img src={activeProps.imgSrc} alt="modal-banner" />
      </div>

      <div className="absolute top-[23px] right-[23px] cursor-pointer">
        <img src="/images/close-icon.svg" alt="close-icon" />
      </div>
      <div className="mt-[39px] text-3xl font-bold">
        <p>{activeProps.content1}</p>
      </div>
      <div className="mt-5 text-xl">
        <p>{activeProps.content2}</p>
      </div>
      <div className="w-full px-[65px] mt-7.75 flex flex-col items-center">
        <button
          className={`w-full h-12 text-white rounded-lg flex justify-center items-center ${
            color === 'bg-white' ? 'text-black' : 'text-white'
          } ${color}`}
        >
          Continue
        </button>
        <button className="w-full h-12 mt-[14.5px] py-2 border border-[#D2DAE3] rounded-lg flex justify-center items-center">
          Not now
        </button>
      </div>
    </div>
  );
};
export default Modal_2;
