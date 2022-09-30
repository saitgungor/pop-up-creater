import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import MainNavigation from '../../components/layout/MainNavigation';

const StepTwo: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Step 2: Apperance</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <div className="w-full px-[243px]">
        <MainNavigation />
      </div>
    </Fragment>
  );
};

export default StepTwo;
