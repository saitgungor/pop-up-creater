import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import MainNavigation from '../../components/layout/MainNavigation';
import Steps from '../../components/UI/Steps';
import MainModal from '../../components/MainModal';
import Size from '../../components/UI/Size';
import Position from '../../components/UI/Position';
import ColorPalette from '../../components/UI/ColorPalette';
import UploadLogo from '../../components/UI/UploadLogo';
import ChangeContent1 from '../../components/UI/ChangeContent1';
import ChangeContent2 from '../../components/UI/ChangeContent2';
import ChangeContent3 from '../../components/UI/ChangeContent3';
import ChangeContent4 from '../../components/UI/ChangeContent4';
import ChangeContent5 from '../../components/UI/ChangeContent5';

const StepTwo: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Customize Your Pop-up</title>
        <link rel="icon" href="/images/popup-icon.svg" />
      </Head>
      <div className="w-full px-[243px]">
        <MainNavigation />
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
        <Steps number="3" text="Content" />
        <div className="text-[14px] mt-[30px]">Edit your content</div>
        <ChangeContent1 />
        <ChangeContent2 />
        <ChangeContent3 />
        <ChangeContent4 />
        <ChangeContent5 />
      </div>
    </Fragment>
  );
};

export default StepTwo;
