import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const Checkbox = props => {
  const dispatch = useDispatch();
  const onChangeHandler = event => {
    const isChecked = event.target.checked;
    if (props.CheckBoxFor === 'desktop')
      dispatch(modalActions.setDesktopAvailable(isChecked));
    if (props.CheckBoxFor === 'mobile')
      dispatch(modalActions.setMobileAvailable(isChecked));
  };
  return (
    <div className="flex items-center h-[18px] w-[18px]">
      <input
        id={props.CheckBoxFor}
        type="checkbox"
        value=""
        className="w-[18px] h-[18px] bg-gray-100 rounded border-gray-300   accent-[#7D4AEA]  "
        onChange={onChangeHandler}
        defaultChecked={props.CheckBoxFor === 'desktop'}
      />
      <label
        htmlFor={props.CheckBoxFor}
        className="ml-2 text-sm font-medium text-gray-900 "
      ></label>
    </div>
  );
};
export default Checkbox;
