import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import MainNavigation from '../../components/layout/MainNavigation';
import Templates from '../../components/templates/Templates';
import Pagination from '../../components/UI/Pagination';

const StepOne: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Step 1: Choose Your Template</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <div className="w-full px-[243px]">
        <MainNavigation />
        <Templates />
        <Pagination />
      </div>
    </Fragment>
  );
};

export default StepOne;
