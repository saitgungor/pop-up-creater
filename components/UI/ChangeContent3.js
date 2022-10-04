import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const ChangeContent3 = () => {
  const dispatch = useDispatch();
  const content3 = useSelector(state => state.modal.modalProps.content3);
  const contentCount = useSelector(
    state => state.modal.modalProps.contentCount
  );

  const [input, setInput] = useState('');
  useEffect(() => {
    if (content3) setInput(content3);
  }, [content3]);

  const onChangeHandler = event => {
    setInput(event.target.value);
    dispatch(modalActions.updateContent({ content3: event.target.value }));
  };

  return (
    <div className={`${contentCount >= 3 ? '' : 'hidden'}`}>
      <input
        className="w-[378px] h-9 border mt-[15px] border-[#DDDDDD] rounded-lg pl-3 placeholder-black outline-none focus:border-[#7D4AEA] focus:ring focus:ring-violet-300"
        type="text"
        id="content-1"
        onChange={onChangeHandler}
        value={input}
      />
    </div>
  );
};

export default ChangeContent3;
