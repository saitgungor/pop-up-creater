import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const Position = () => {
  const dispatch = useDispatch();
  const position = useSelector(state => state.modal.modalProps.position);

  const onPositionHandler = event => {
    const id = event.target.id;
    if (!id) return;
    let positionClassName;
    switch (id) {
      case 'tr':
        positionClassName = 'absolute top-0 right-0 origin-top-right ';
        break;
      case 'tm':
        positionClassName =
          'absolute top-0 left-1/2  translate-x-[-50%] origin-top  ';
        break;
      case 'tl':
        positionClassName = 'absolute top-0 left-0 origin-top-left ';
        break;
      case 'mr':
        positionClassName =
          'absolute right-0 top-1/2 translate-y-[-50%] origin-right  ';
        break;
      case 'm':
        positionClassName =
          'absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] ';
        break;
      case 'ml':
        positionClassName =
          'absolute left-0 top-1/2 translate-y-[-50%] origin-left  ';
        break;
      case 'br':
        positionClassName = 'absolute bottom-0 right-0 origin-bottom-right ';
        break;
      case 'bm':
        positionClassName =
          'absolute bottom-0 left-1/2  translate-x-[-50%] origin-bottom  ';
        break;
      case 'bl':
        positionClassName = 'absolute bottom-0 left-0 origin-bottom-left';
        break;
    }
    dispatch(modalActions.updatePosition([positionClassName, id]));
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
