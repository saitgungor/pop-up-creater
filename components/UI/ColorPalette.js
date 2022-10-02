import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const ColorPalete = () => {
  const dispatch = useDispatch();
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
        className="bg-[#7D4AEA] rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#7D4AEA"
      ></div>
      <div
        className="bg-black rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#000000"
      ></div>
      <div
        className="bg-[#F37C34] rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#F37C34"
      ></div>
      <div
        className="bg-[#777777] rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#777777"
      ></div>
      <div
        className="bg-[#DDDDDD] rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#DDDDDD"
      ></div>
      <div
        className="bg-white rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#ffffff"
      ></div>
    </div>
  );
};
export default ColorPalete;
