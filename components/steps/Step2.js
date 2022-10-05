import { Fragment } from 'react';

import Steps from '../UI/Steps';
import Size from '../UI/Size';
import Position from '../UI/Position';
import ColorPalette from '../UI/ColorPalette';
import UploadLogo from '../UI/UploadLogo';
import MainModal from '../MainModal';

const Step2 = () => {
  return (
    <Fragment>
      <Steps number="2" text="Appearance (Size, colors, logo)" />
      <div className="flex mt-[30px]">
        <div className="w-1/3 flex flex-col">
          <div className="text-[14px]">Size</div>
          <Size />
          <div className="text-[14px] mt-[30px]">Position</div>
          <Position />
          <div className="text-[14px] mt-[30px]">Colors</div>
          <ColorPalette />
          <div className="text-[14px] mt-[30px]">Upload Logo</div>
          <UploadLogo />
        </div>
        <div className="w-2/3 ml-[50px] bg-[#dddddd] border-[#666666] border-4 relative">
          <MainModal />
        </div>
      </div>
    </Fragment>
  );
};

export default Step2;
