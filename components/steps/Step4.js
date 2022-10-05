import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

import Steps from '../UI/Steps';
import ToggleSwitch from '../UI/ToggleSwitch';
import CheckBox from '../UI/CheckBox';

const Step4 = () => {
  const dispatch = useDispatch();
  const afterSecondsHandler = event => {
    dispatch(modalActions.setAfterSeconds(event.target.value));
  };
  const afterScrollHandler = event => {
    dispatch(modalActions.setAfterScroll(event.target.value));
  };
  const trafficSourceHandler = event => {
    dispatch(modalActions.setTrafficSource(event.target.value));
  };

  const { disableAfterSeconds, disableAfterScroll, disableTrafficSource } =
    useSelector(state => state.modal);
  return (
    <div className="w-1/3 flex flex-col">
      <Steps number="4" text="Targeting Rules" />
      <div className="flex justify-between mt-[30px]  w-11/12 text-sm font-semibold">
        <h3>Visitor Device</h3>
        <ToggleSwitch switchFor="VisitorDevice" isChecked={true} />
      </div>
      <div className="mt-5  gap-5 grid grid-cols-2 w-11/12 text-sm">
        <div className="flex bg-[#F5F5F5] p-[15px] gap-[5px] items-center rounded-xl">
          <CheckBox CheckBoxFor="desktop" />
          <img
            className="w-[18px] h-[14px]"
            src="/images/desktop-icon.svg"
            alt="desktop-icon"
          />
          Desktop
        </div>
        <div className="flex bg-[#F5F5F5] p-[15px] gap-[5px] items-center rounded-xl">
          <CheckBox CheckBoxFor="mobile" />
          <img
            className="w-[18px] h-[14px] filter-red-500"
            src="/images/phone-icon.svg"
            alt="phone-icon"
          />
          Mobil
        </div>
      </div>
      <div className="flex justify-between mt-[30px]  w-11/12 text-sm font-semibold">
        <h3>After X seconds</h3>
        <ToggleSwitch switchFor="AfterSeconds" />
      </div>
      <input
        className="w-11/12 h-9 border mt-[15px] border-[#DDDDDD] rounded-lg pl-3 placeholder-[#777777] outline-none"
        type="text"
        id="after-seconds"
        placeholder="Enter time"
        disabled={disableAfterSeconds}
        onChange={afterSecondsHandler}
      />
      <div className="flex justify-between mt-[30px]  w-11/12 text-sm font-semibold">
        <h3>After % Scroll</h3>
        <ToggleSwitch switchFor="AfterScroll" />
      </div>
      <input
        className="w-11/12 h-9 border mt-[15px] border-[#DDDDDD] rounded-lg pl-3 placeholder-[#777777] outline-none"
        type="text"
        id="after-scroll"
        placeholder="Enter scroll value"
        disabled={disableAfterScroll}
        onChange={afterScrollHandler}
      />
      <div className="flex justify-between mt-[30px]  w-11/12 text-sm font-semibold">
        <h3>Traffic Source</h3>
        <ToggleSwitch switchFor="TrafficSource" />
      </div>
      <input
        className="w-11/12 h-9 border mt-[15px] border-[#DDDDDD] rounded-lg pl-3 placeholder-[#777777] outline-none"
        type="text"
        id="traffic-source"
        placeholder="Enter your traffic source domain"
        disabled={disableTrafficSource}
        onChange={trafficSourceHandler}
      />
      <div className="flex justify-between mt-[30px]  w-11/12 text-sm font-semibold">
        <h3>Exit Intent Targeting</h3>
        <ToggleSwitch switchFor="exitIntentTargeting" />
      </div>
    </div>
  );
};

export default Step4;
