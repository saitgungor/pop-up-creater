const Modal_2 = () => {
  return (
    <div className="flex flex-col items-center bg-white w-120 h-150 rounded-lg relative">
      <div className="max-h-75">
        <img src="/images/modal-2-banner.png" alt="modal-banner" />
      </div>

      <div className="absolute top-6 right-6 ">
        <img src="/images/close-icon.svg" alt="close-icon" />
      </div>
      <div className="mt-[39px] text-3xl font-bold">
        <p>Install local now</p>
      </div>
      <div className="mt-5 text-xl">
        <p>We’ve gone native, try it!</p>
      </div>
      <div className="w-full px-[65px] mt-7.75 flex flex-col items-center">
        <button
          className="w-full h-12 text-white rounded-lg bg-[#7D4AEA]
 flex justify-center items-center"
        >
          Continue
        </button>
        <button className="w-full h-12 mt-[14.5px] py-2 border border-[#D2DAE3] rounded-lg flex justify-center items-center">
          Not now
        </button>
      </div>
    </div>
  );
};
export default Modal_2;
