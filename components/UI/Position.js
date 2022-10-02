import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const Position = () => {
  const dispatch = useDispatch();
  const position = useSelector(state => state.modal.modalProps.position);

  const onPositionHandler = event => {
    if (!event.target.id) return;
    dispatch(modalActions.updatePosition(event.target.id));
  };

  return (
    <div
      className="w-[82px] h-[55px] grid grid-cols-3 grid-rows-3 gap-[5px] cursor-pointer mt-[15px] "
      onClick={onPositionHandler}
    >
      <div
        className={`border rounded-tl-[3px] [#DDDDDD] ${
          position === 'tl' ? 'positionActive' : ''
        } `}
        id="tl"
      ></div>
      <div
        className={`border [#DDDDDD] ${
          position === 'tm' ? 'positionActive' : ''
        } `}
        id="tm"
      ></div>
      <div
        className={`border rounded-tr-[3px] [#DDDDDD] ${
          position === 'tr' ? 'positionActive' : ''
        } `}
        id="tr"
      ></div>
      <div
        className={`border [#DDDDDD] ${
          position === 'ml' ? 'positionActive' : ''
        } `}
        id="ml"
      ></div>
      <div
        className={`border [#DDDDDD] ${
          position === 'm' ? 'positionActive' : ''
        } `}
        id="m"
      ></div>
      <div
        className={`border [#DDDDDD] ${
          position === 'mr' ? 'positionActive' : ''
        } `}
        id="mr"
      ></div>
      <div
        className={`border rounded-bl-[3px] [#DDDDDD] ${
          position === 'bl' ? 'positionActive' : ''
        } `}
        id="bl"
      ></div>
      <div
        className={`border [#DDDDDD] ${
          position === 'bm' ? 'positionActive' : ''
        } `}
        id="bm"
      ></div>
      <div
        className={`border rounded-br-[3px] [#DDDDDD] ${
          position === 'br' ? 'positionActive' : ''
        } `}
        id="br"
      ></div>
    </div>
  );
};

export default Position;
