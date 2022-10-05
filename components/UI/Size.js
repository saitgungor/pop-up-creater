import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const Size = () => {
  const dispatch = useDispatch();
  const scale = useSelector(state => state.modal.modalProps.scale);

  const changeSizeHandler = event => {
    const id = event.target.id;
    let scale;
    if (id === 's') scale = 'scale-50';
    if (id === 'm') scale = 'scale-75';
    if (id === 'l') scale = 'scale-100';
    dispatch(modalActions.updateSize(scale));
  };
  return (
    <div className="w-[257px] h-[48px] flex bg-[#F5F5F5]  items-center mt-[15px] rounded-lg text-[#777777] font-semibold cursor-pointer">
      <div
        className={`w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl ${
          scale === 'scale-50' ? 'active' : ''
        }`}
        onClick={changeSizeHandler}
        id="s"
      >
        Small
      </div>
      <div
        className={`w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl ${
          scale === 'scale-75' ? 'active' : ''
        }`}
        onClick={changeSizeHandler}
        id="m"
      >
        Medium
      </div>
      <div
        className={`w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl ${
          scale === 'scale-100' ? 'active' : ''
        }`}
        onClick={changeSizeHandler}
        id="l"
      >
        Large
      </div>
    </div>
  );
};

export default Size;
