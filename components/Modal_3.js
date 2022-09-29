const Modal_3 = () => {
  return (
    <div className="flex flex-col items-center bg-white w-120 h-150 rounded-lg relative">
      <div className="absolute top-6 right-6 ">
        <img src="/images/close-icon.svg" alt="close-icon" />
      </div>
      <div className="uppercase text-[#7D4AEA] text-lg mt-[49px]">
        <p>plans</p>
      </div>
      <div className="mt-[14px] text-3xl font-bold">
        <p>Choose best for you</p>
      </div>
      <div className="mt-[15px] text-xl">
        <p>Only pay for the capacity that you use.</p>
      </div>
      <div className="w-full px-[65px] mt-[52px]">
        <div className="form-check ">
          <input
            className="form-check-input  appearance-none rounded-full h-[23px] w-[23px] border border-[#717791] checked:border-[#7D4AEA] checked:border-8 hover:border-[#7D4AEA] hover:ring-4 hover:ring-[#7D4AEA] hover:ring-opacity-[0.17] transition duration-200 float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label inline-block font-medium"
            for="flexRadioDefault1"
          >
            Starter
          </label>
          <p className="text-sm text-[#717791] ml-[31px] mt-[10px]">
            1 free (then $15 per meember / month)
          </p>
        </div>
        <div className="form-check mt-[30px]">
          <input
            className="form-check-input  appearance-none rounded-full h-[23px] w-[23px] border border-[#717791] checked:border-[#7D4AEA] checked:border-8 hover:border-[#7D4AEA] hover:ring-4 hover:ring-[#7D4AEA] hover:ring-opacity-[0.17] transition duration-200 float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label inline-block font-medium"
            for="flexRadioDefault1"
          >
            Pro
          </label>
          <p className="text-sm text-[#717791] ml-[31px] mt-[10px]">
            $19 per member/month
          </p>
        </div>
        <div className="form-check mt-[30px]">
          <input
            className="form-check-input  appearance-none rounded-full h-[23px] w-[23px] border border-[#717791] checked:border-[#7D4AEA] checked:border-8 hover:border-[#7D4AEA] hover:ring-4 hover:ring-[#7D4AEA] hover:ring-opacity-[0.17] transition duration-200 float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label inline-block font-medium"
            for="flexRadioDefault1"
          >
            Business
          </label>
          <p className="text-sm text-[#717791] ml-[31px] mt-[10px]">
            $29 per member/month
          </p>
        </div>
      </div>
      <div className="w-full px-[65px] mt-[40.5px] flex items-center justify-between">
        <button className="w-[167px] h-12 py-2 border border-[#D2DAE3] rounded-lg flex justify-center items-center">
          Cancel
        </button>

        <button
          className="w-[168px] h-12 text-white rounded-lg bg-[#7D4AEA]
 flex justify-center items-center"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default Modal_3;
