import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const Size = () => {
  const dispatch = useDispatch();
  const size = useSelector(state => state.modal.modalProps.size);

  const changeSizeHandler = event => {
    dispatch(modalActions.updateSize(event.target.id));
  };
  return (
    <div className="w-[257px] h-[48px] flex bg-[#F5F5F5]  items-center mt-[15px] rounded-lg text-[#777777] font-semibold cursor-pointer">
      <div
        className={`w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl ${
          size === 's' ? 'active' : ''
        }`}
        onClick={changeSizeHandler}
        id="s"
      >
        Small
      </div>
      <div
        className={`w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl ${
          size === 'm' ? 'active' : ''
        }`}
        onClick={changeSizeHandler}
        id="m"
      >
        Medium
      </div>
      <div
        className={`w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl ${
          size === 'l' ? 'active' : ''
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
