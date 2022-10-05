import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

useDispatch;

const ToggleSwitch = props => {
  const dispatch = useDispatch();
  const onClickHandler = event => {
    const id = event.target.id;
    const isChecked = event.target.checked;
    if (id === 'exitIntentTargeting') {
      dispatch(modalActions.switchToggle([id, isChecked]));
      return;
    }
    let name = `disable${id}`;
    dispatch(modalActions.switchToggle([name, !isChecked]));
  };
  return (
    <label
      htmlFor={props.switchFor}
      className="inline-flex relative items-centercursor-pointer"
    >
      <input
        type="checkbox"
        value=""
        id={props.switchFor}
        className="sr-only peer"
        onClick={onClickHandler}
        defaultChecked={props.isChecked}
      />
      <div className="w-[33px] h-5 bg-gray-200  rounded-full peer  peer-checked:after:translate-x-[85%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-[#7D4AEA]"></div>
    </label>
  );
};
export default ToggleSwitch;
