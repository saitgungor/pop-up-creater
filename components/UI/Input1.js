import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const Input1 = () => {
  const dispatch = useDispatch();
  const content1 = useSelector(state => state.modal.modalProps.content1);

  const [input, setInput] = useState(content1);

  const onChangeHandler = event => {
    setInput(event.target.value);
    dispatch(modalActions.updateContent({ content1: input }));
  };

  return (
    <div>
      <input
        className="w-[378px] h-9 border mt-[15px] border-[#DDDDDD] rounded-lg pl-3 placeholder-black outline-none focus:border-[#7D4AEA] focus:ring focus:ring-violet-300"
        type="text"
        id="content-1"
        onChange={onChangeHandler}
        value={content1 || ''}
      />
    </div>
  );
};

export default Input1;
