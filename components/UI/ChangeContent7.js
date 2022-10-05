import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const ChangeContent7 = () => {
  const dispatch = useDispatch();
  const content7 = useSelector(state => state.modal.modalProps.content7);
  const contentCount = useSelector(
    state => state.modal.modalProps.contentCount
  );

  const [input, setInput] = useState('');
  useEffect(() => {
    if (content7) setInput(content7);
  }, [content7]);

  const onChangeHandler = event => {
    setInput(event.target.value);
    dispatch(modalActions.updateContent({ content7: event.target.value }));
  };

  return (
    <div className={`${contentCount >= 7 ? '' : 'hidden'}`}>
      <input
        className="w-11/12 h-9 border mt-[15px] border-[#DDDDDD] rounded-lg pl-3 placeholder-black outline-none focus:border-[#7D4AEA] focus:ring focus:ring-violet-300"
        type="text"
        id="content-1"
        onChange={onChangeHandler}
        value={input}
      />
    </div>
  );
};

export default ChangeContent7;
