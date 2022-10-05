import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../store/modal-slice';

const Modal_4 = () => {
  const dispatch = useDispatch();
  const initialModalProps = {
    id: '4',
    imgSrc: '/images/delete-icon.svg',
    content1: 'Delete your profile',
    content2: 'Your profile will be automatically deleted after 1 month.',
    content3: 'You won’t be able to access to your profile after',
    content4: '30.08.2021.',
    content5: 'Delete my profile',
    contentCount: 4,
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
      className={`flex flex-col items-center bg-white w-[480px] h-[516px] rounded-lg relative ${classNames}`}
    >
      <div className="bg-[#7D4AEA] w-[90px] h-[90px] mt-10 flex justify-center items-center rounded-full">
        <img
          src={activeProps.imgSrc}
          alt="delete-icon"
          className="w-[28px] h-[36px]"
        />
      </div>
      <div className="absolute top-[23px] right-[23px] cursor-pointer">
        <img src="/images/close-icon.svg" alt="close-icon" />
      </div>
      <div className="mt-[29px] text-3xl font-bold">
        <p>{activeProps.content1}</p>
      </div>
      <div className="mt-5 mx-[87px] text-xl text-center leading-6 ">
        <p>{activeProps.content2}</p>
      </div>
      <div className="mt-[31px] mx-[120px] text-base text-[#777777] text-center leading-5 ">
        <p>
          {activeProps.content3}
          <span className="text-black"> {activeProps.content4}</span>
        </p>
      </div>

      <div className="w-full px-[65px] mt-[34px]">
        <div className="w-full flex  flex-col  ">
          <button
            className={`w-full h-[48px] text-white rounded-lg ${
              color === 'bg-white' ? 'text-black' : 'text-white'
            } ${color} flex justify-center items-center`}
          >
            {activeProps.content5}
          </button>
          <button className="w-full h-[47px] mt-[14.5px] border border-[#D2DAE3] rounded-lg flex justify-center items-center">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal_4;
