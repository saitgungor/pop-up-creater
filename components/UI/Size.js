const Size = () => {
  return (
    <div className="w-[257px] h-[48px] flex bg-[#F5F5F5]  items-center mt-[15px] rounded-lg text-[#777777] font-semibold cursor-pointer">
      <div className="w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl active">
        Small
      </div>
      <div className="w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl">
        Medium
      </div>
      <div className="w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl">
        Large
      </div>
    </div>
  );
};

export default Size;
