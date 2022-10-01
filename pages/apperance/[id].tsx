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

const StepTwo: NextPage = () => {
  console.log(MainModal);
  return (
    <Fragment>
      <Head>
        <title>Step 2: Apperance</title>
        <link rel="icon" href="/images/logo.svg" />
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
          <div className="w-2/3 ml-[50px] bg-red-500">
            <div className="w-full flex">
              <div className="shadow-xl scale-[.5]">{/* <MainModal /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StepTwo;
