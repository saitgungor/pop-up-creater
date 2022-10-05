import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import MainNavigation from '../../components/layout/MainNavigation';
import Step2 from '../../components/steps/Step2';
import Step3 from '../../components/steps/Step3';
import Step4 from '../../components/steps/Step4';
import Step5 from '../../components/steps/Step5';

const StepTwo: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Customize Your Pop-up</title>
        <link rel="icon" href="/images/popup-icon.svg" />
      </Head>
      <div className="w-full px-[243px]">
        <MainNavigation />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
      </div>
    </Fragment>
  );
};

export default StepTwo;
