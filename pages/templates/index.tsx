import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

import MainNavigation from '../../components/layout/MainNavigation';
import Templates from '../../components/templates/Templates';
import Pagination from '../../components/UI/Pagination';

const StepOne: NextPage = () => {
  const dispatch = useDispatch();
  dispatch(modalActions.resetModal(''));
  return (
    <Fragment>
      <Head>
        <title>Choose Your Template</title>
        <link rel="icon" href="/images/popup-icon.svg" />
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
