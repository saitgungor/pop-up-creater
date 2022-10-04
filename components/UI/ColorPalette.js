import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const ColorPalete = () => {
  const dispatch = useDispatch();
  const color = useSelector(state => state.modal.modalProps.color);
  const changeColorHandler = event => {
    if (!event.target.id) return;
    dispatch(modalActions.updateColor(event.target.id));
  };
  return (
    <div
      className="w-[303px] h-[42px] gap-[10px] grid grid-cols-6"
      onClick={changeColorHandler}
    >
      <div
        className={`bg-[#7D4AEA] rounded-[10px] border border-black border-opacity-30 cursor-pointer ${
          color === '#7D4AEA' ? 'ring-4 ring-purple-400' : ''
        }`}
        id="#7D4AEA"
      ></div>
      <div
        className={`bg-black rounded-[10px] border border-black border-opacity-30 cursor-pointer ${
          color === '#000000' ? 'ring-4 ring-gray-500' : ''
        }`}
        id="#000000"
      ></div>
      <div
        className={`bg-[#F37C34] rounded-[10px] border border-black border-opacity-30 cursor-pointer ${
          color === '#F37C34' ? 'ring-4 ring-orange-400' : ''
        }`}
        id="#F37C34"
      ></div>
      <div
        className={`bg-[#777777] rounded-[10px] border border-black border-opacity-30 cursor-pointer ${
          color === '#777777' ? 'ring-4 ring-gray-400' : ''
        }`}
        id="#777777"
      ></div>
      <div
        className={`bg-[#DDDDDD] rounded-[10px] border border-black border-opacity-30 cursor-pointer ${
          color === '#DDDDDD' ? 'ring-4 ring-gray-300' : ''
        }`}
        id="#DDDDDD"
      ></div>
      <div
        className={`bg-white rounded-[10px] border border-black border-opacity-30 cursor-pointer ${
          color === '#ffffff' ? 'ring-4 ring-blue-300' : ''
        }`}
        id="#ffffff"
      ></div>
    </div>
  );
};
export default ColorPalete;
