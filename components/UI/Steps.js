const Steps = props => {
  return (
    <div className="flex items-center mt-[50px]">
      <div className="h-9 w-9 rounded-full bg-[#EAEAEA] font-semibold  flex items-center justify-center">
        {props.number}
      </div>
      <p className="font-poppins ml-[15px] text-lg font-semibold ">
        {props.text}
      </p>
    </div>
  );
};

export default Steps;
