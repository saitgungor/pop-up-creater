import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';
import { sendPostRequest } from '../../helper/helper';
import { useState } from 'react';

import Steps from '../UI/Steps';
import CheckBox from '../UI/CheckBox';

const Step5 = () => {
  const [URL, setURL] = useState('');
  const dispatch = useDispatch();
  const modalProps = useSelector(state => state.modal.modalProps);
  const showCode = useSelector(state => state.modal.showCode);
  const showCodeHandler = () => {
    dispatch(modalActions.showCode());
    sendPostRequest(URL, modalProps);
  };

  const urlHandler = event => {
    setURL(event.target.value);
  };

  const copyTheCodeHandler = () => {
    const data = JSON.stringify(modalProps);
    navigator.clipboard.writeText(data);
  };
  return (
    <div className="w-1/3 flex flex-col">
      <Steps number="5" text="Settings and Code" />
      <h3 className="mt-[30px] text-lg font-semibold">Webhook to Send data</h3>
      <div className="mt-[15px] gap-[5px] flex flex-col">
        <h4 className="text-sm">Enter your Webhook URL</h4>
        <p className="text-xs">
          You can create a simple one with <b>make.com</b>
        </p>
      </div>
      <div className="mt-[15px] w-11/12">
        <input
          className="w-full h-9 border  border-[#DDDDDD] rounded-lg pl-3 placeholder-[#777777] outline-none"
          type="text"
          id="enter-webhook-url"
          placeholder="Your Webhook URL"
          onChange={urlHandler}
        />
        <div className="gap-[5px] mt-[15px] flex items-center text-sm">
          <CheckBox CheckBoxFor="sendFormData" enableCheckbox={true} />
          <p>Send form submissions</p>
        </div>
      </div>
      <div className="mt-[15px] w-11/12">
        <div className="gap-[5px]  flex items-center text-sm">
          <CheckBox CheckBoxFor="sendClickData" enableCheckbox={true} />
          <p>Send click data</p>
        </div>
      </div>
      <button
        onClick={showCodeHandler}
        className="w-[184px] h-[60px] text-white bg-[#7D4AEA] flex items-center justify-center rounded-xl mt-[50px]"
      >
        Get your Code
      </button>
      <div
        className={`w-11/12 h-260px bg-[#333333] mt-[30px] rounded-lg text-white over overflow-auto relative ${
          showCode ? '' : 'hidden'
        }`}
      >
        <p className="w-full h-[188px] text-xs leading-4 mt-[15px] mx-[15px] ">
          {JSON.stringify(modalProps)}
        </p>
        <button
          onClick={copyTheCodeHandler}
          className="w-[129px] h-[30px] text-white bg-[#7D4AEA] flex items-center justify-center rounded-full  absolute top-[75%] right-[5%]"
        >
          Copy the code
        </button>
      </div>
    </div>
  );
};

export default Step5;
