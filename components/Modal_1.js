import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../store/modal-slice';

const Modal_1 = () => {
  const dispatch = useDispatch();
  const initialModalProps = {
    id: '1',
    imgSrc: '/images/security-icon.svg',
    content1: 'Security Code',
    content2: 'This code expires in 24 hours',
    content3: 'Code',
    contentCount: 3,
    color: '#7D4AEA',
  };

  const activeModalId = useSelector(state => state.modal.activeModalId);
  useEffect(() => {
    if (activeModalId !== initialModalProps.id) return;
    dispatch(modalActions.updateModalProps(initialModalProps));
  }, [dispatch]);
  const modalProps = useSelector(state => state.modal.modalProps);
  const activeProps = modalProps.content1 ? modalProps : initialModalProps;
  let color;
  if (activeProps.color === '#ffffff') {
    color = 'bg-white';
  } else if (activeProps.color === '#000000') {
    color = 'bg-black';
  } else {
    color = `bg-[${activeProps.color}]`;
  }

  return (
    <div
      className={`flex flex-col items-center bg-white w-[480px] h-[446px] rounded-lg ${
        activeProps.positionClassName
      } ${'scale-' + activeProps.scale}`}
    >
      <div className="bg-[#7D4AEA] w-[90px] h-[90px] mt-10 flex justify-center items-center rounded-full">
        <img
          src={activeProps.imgSrc}
          alt="security-icon"
          className="w-[36px] h-[44px]"
        />
      </div>
      <div className="absolute top-[23px] right-[23px] cursor-pointer ">
        <img src="/images/close-icon.svg" alt="close-icon" />
      </div>
      <div className="mt-[29px] text-3xl font-bold">
        <p>{activeProps.content1}</p>
      </div>
      <div className="mt-5 text-xl">
        <p>{activeProps.content2}</p>
      </div>
      <div className="w-full px-[65px] mt-[41.5px]">
        <label htmlFor="code" className="sr-only ">
          {activeProps.content3}
        </label>
        <input
          className="border pl-3 h-[47px] border-[#D2DAE3] rounded-lg w-full placeholder-black  "
          type="code"
          placeholder={activeProps.content3}
          id="code"
        />
        <div className="w-full flex mt-7.75 justify-between ">
          <button className="w-41.75 h-[47px] border border-[#D2DAE3] rounded-lg flex justify-center items-center">
            Cancel
          </button>
          <button
            className={`w-41.75 h-[48px] border border-[#D2DAE3] ${
              color === 'bg-white' ? 'text-black' : 'text-white'
            } rounded-lg ${color} flex justify-center items-center`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal_1;
