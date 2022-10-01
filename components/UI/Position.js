const Position = () => {
  const onPositionHandler = event => {
    if (!event.target.id) return;
    console.log(event.target.id);
  };

  return (
    <div
      className="w-[82px] h-[55px] grid grid-cols-3 grid-rows-3 gap-[5px] cursor-pointer mt-[15px] "
      onClick={onPositionHandler}
    >
      <div className="border rounded-tl-[3px] [#DDDDDD]" id="tl"></div>
      <div className="border [#DDDDDD]" id="tm"></div>
      <div className="border rounded-tr-[3px] [#DDDDDD]" id="tr"></div>
      <div className="border [#DDDDDD]" id="ml"></div>
      <div className="border [#DDDDDD] positionActive" id="m"></div>
      <div className="border [#DDDDDD]" id="mr"></div>
      <div className="border rounded-bl-[3px] [#DDDDDD]" id="bl"></div>
      <div className="border [#DDDDDD]" id="bm"></div>
      <div className="border rounded-br-[3px] [#DDDDDD]" id="br"></div>
    </div>
  );
};

export default Position;
