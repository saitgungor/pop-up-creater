const ColorPalete = () => {
  const changeColorHandler = event => {
    if (!event.target.id) return;
    console.log(event.target.id);
  };
  return (
    <div
      className="w-[253px] h-[42px] gap-[10px] grid grid-cols-5"
      onClick={changeColorHandler}
    >
      <div
        className="bg-black rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#000000"
      ></div>
      <div
        className="bg-[#F37C34] rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#F37C34"
      ></div>
      <div
        className="bg-[#777777] rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#777777"
      ></div>
      <div
        className="bg-[#DDDDDD] rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#DDDDDD"
      ></div>
      <div
        className="bg-white rounded-[10px] border border-black border-opacity-30 cursor-pointer"
        id="#ffffff"
      ></div>
    </div>
  );
};
export default ColorPalete;
