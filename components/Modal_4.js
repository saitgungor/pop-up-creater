const Modal_4 = () => {
  return (
    <div className="flex flex-col items-center bg-white w-[480px] h-[516px] rounded-lg relative">
      <div className="bg-[#7D4AEA] w-[90px] h-[90px] mt-10 flex justify-center items-center rounded-full">
        <img
          src="/images/delete-icon.svg"
          alt="delete-icon"
          className="w-[28px] h-[36px]"
        />
      </div>
      <div className="absolute top-[23px] right-[23px] ">
        <img src="/images/close-icon.svg" alt="close-icon" />
      </div>
      <div className="mt-[29px] text-3xl font-bold">
        <p>Delete your profile</p>
      </div>
      <div className="mt-5 mx-[87px] text-xl text-center leading-6 ">
        <p>Your profile will be automatically deleted after 1 month.</p>
      </div>
      <div className="mt-[31px] mx-[120px] text-base text-[#777777] text-center leading-5 ">
        <p>
          You won’t be able to access to your profile after
          <span className="text-black"> 30.08.2021.</span>
        </p>
      </div>

      <div class="w-full px-[65px] mt-[34px]">
        <div className="w-full flex  flex-col  ">
          <button className="w-full h-[48px] text-white rounded-lg bg-[#7D4AEA] flex justify-center items-center">
            Delete my profile
          </button>
          <button className="w-full h-[47px] mt-[14.5px] border border-[#D2DAE3] rounded-lg flex justify-center items-center">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal_4;
