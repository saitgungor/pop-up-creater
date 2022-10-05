import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const ChangeContent10 = () => {
  const dispatch = useDispatch();
  const content10 = useSelector(state => state.modal.modalProps.content10);
  const contentCount = useSelector(
    state => state.modal.modalProps.contentCount
  );

  const [input, setInput] = useState('');
  useEffect(() => {
    if (content10) setInput(content10);
  }, [content10]);

  const onChangeHandler = event => {
    setInput(event.target.value);
    dispatch(modalActions.updateContent({ content10: event.target.value }));
  };

  return (
    <div className={`${contentCount >= 10 ? '' : 'hidden'}`}>
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

export default ChangeContent10;
