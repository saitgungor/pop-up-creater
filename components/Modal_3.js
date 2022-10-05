import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../store/modal-slice';

const Modal_3 = () => {
  const dispatch = useDispatch();
  const initialModalProps = {
    id: '3',
    content1: 'plans',
    content2: 'Choose best for you',
    content3: 'Only pay for the capacity that you use.',
    content4: 'Starter',
    content5: '1 free (then $15 per meember / month)',
    content6: 'Pro',
    content7: '$19 per member/month',
    content8: 'Business',
    content9: '$29 per member/month',
    contentCount: 9,
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
      <div className="absolute top-[23px] right-[23px] cursor-pointer">
        <img src="/images/close-icon.svg" alt="close-icon" />
      </div>
      <div className="uppercase text-[#7D4AEA] text-lg mt-[49px]">
        <p>{activeProps.content1}</p>
      </div>
      <div className="mt-[14px] text-3xl font-bold">
        <p>{activeProps.content2}</p>
      </div>
      <div className="mt-[15px] text-xl">
        <p>{activeProps.content3}</p>
      </div>
      <div className="w-full px-[65px] mt-[52px]">
        <div className="form-check ">
          <input
            className="form-check-input  appearance-none rounded-full h-[23px] w-[23px] border border-[#717791] checked:border-[#7D4AEA] checked:border-8 hover:border-[#7D4AEA] hover:ring-4 hover:ring-[#7D4AEA] hover:ring-opacity-[0.17] transition duration-200 float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label inline-block font-medium"
            htmlFor="flexRadioDefault1"
          >
            {activeProps.content4}
          </label>
          <p className="text-sm text-[#717791] ml-[31px] mt-[10px]">
            {activeProps.content5}
          </p>
        </div>
        <div className="form-check mt-[30px]">
          <input
            className="form-check-input  appearance-none rounded-full h-[23px] w-[23px] border border-[#717791] checked:border-[#7D4AEA] checked:border-8 hover:border-[#7D4AEA] hover:ring-4 hover:ring-[#7D4AEA] hover:ring-opacity-[0.17] transition duration-200 float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label inline-block font-medium"
            htmlFor="flexRadioDefault1"
          >
            {activeProps.content6}
          </label>
          <p className="text-sm text-[#717791] ml-[31px] mt-[10px]">
            {activeProps.content7}
          </p>
        </div>
        <div className="form-check mt-[30px]">
          <input
            className="form-check-input  appearance-none rounded-full h-[23px] w-[23px] border border-[#717791] checked:border-[#7D4AEA] checked:border-8 hover:border-[#7D4AEA] hover:ring-4 hover:ring-[#7D4AEA] hover:ring-opacity-[0.17] transition duration-200 float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label inline-block font-medium"
            htmlFor="flexRadioDefault1"
          >
            {activeProps.content8}
          </label>
          <p className="text-sm text-[#717791] ml-[31px] mt-[10px]">
            {activeProps.content9}
          </p>
        </div>
      </div>
      <div className="w-full px-[65px] mt-[40.5px] flex items-center justify-between">
        <button className="w-[167px] h-12 py-2 border border-[#D2DAE3] rounded-lg flex justify-center items-center">
          Cancel
        </button>

        <button
          className={`w-[168px] h-12 text-white rounded-lg ${
            color === 'bg-white' ? 'text-black' : 'text-white'
          } ${color}
 flex justify-center items-center`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default Modal_3;
