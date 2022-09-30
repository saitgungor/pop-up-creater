const Pagination = props => {
  return (
    <div className="w-[132px] h-[48px] flex bg-[#F5F5F5]  items-center mt-[30px] mb-[50px] rounded-lg text-[#777777] font-semibold cursor-pointer">
      <div className="w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl active">
        1
      </div>
      <div className="w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl">
        2
      </div>
      <div className="w-1/3 h-[42px] mx-[3px] flex items-center justify-center rounded-xl">
        3
      </div>
    </div>
  );
};

export default Pagination;
