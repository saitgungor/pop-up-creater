const Modal_1 = () => {
  return (
    <div
      className="flex flex-col items-center bg-white w-[480px] h-[446px] rounded-lg relative"
      id="modal-1"
    >
      <div className="bg-[#7D4AEA] w-[90px] h-[90px] mt-10 flex justify-center items-center rounded-full">
        <img
          src="/images/security-icon.svg"
          alt="security-icon"
          className="w-[36px] h-[44px]"
        />
      </div>
      <div className="absolute top-[23px] right-[23px] ">
        <img src="/images/close-icon.svg" alt="close-icon" />
      </div>
      <div className="mt-[29px] text-3xl font-bold">
        <p>Security Code</p>
      </div>
      <div className="mt-5 text-xl">
        <p>This code expires in 24 hours</p>
      </div>
      <div className="w-full px-[65px] mt-[41.5px]">
        <label htmlFor="code" className="sr-only ">
          Code
        </label>
        <input
          className="border pl-3 h-[47px] border-[#D2DAE3] rounded-lg w-full placeholder-black  "
          type="code"
          placeholder="Code"
          id="code"
        />
        <div className="w-full flex mt-7.75 justify-between ">
          <button className="w-41.75 h-[47px] border border-[#D2DAE3] rounded-lg flex justify-center items-center">
            Cancel
          </button>
          <button className="w-41.75 h-[48px] text-white rounded-lg bg-[#7D4AEA] flex justify-center items-center">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal_1;
