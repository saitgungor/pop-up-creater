import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Pop-up Creater by OSG</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <div className="px-[243px] h-[900px] flex flex-col w-full bg-gradient-to-b  from-[#FFFFFF] to-[#E3F2F6] relative">
        <header className="mt-[23px] w-full">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src="/images/logo.svg" />
              <span className="font-extrabold ml-[10px]">modal.cards</span>
              <ul className="flex ml-[82px] gap-[30px] font-medium">
                <li className="flex">
                  Solution{' '}
                  <span className="ml-[9.5px] flex items-center">
                    <img src="/images/chevron-down.svg" />
                  </span>
                </li>
                <li>Product Tour</li>
                <li>Showcase</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="gap-[30px] flex items-center">
              Sign in
              <button className="w-[121px] h-9 bg-[#7D4AEA] flex items-center justify-center  text-white rounded-xl">
                Try for free
              </button>
            </div>
          </div>
        </header>
        <div className="text-7xl mt-[99px] w-[486px] h-[160px] font-semibold">
          <h1>Simple modal card creator</h1>
        </div>
        <div className="w-[1128px] text-3xl leading-[44px] mt-5]">
          <p>
            A utility-first CSS framework packed with classeslike flex, pt-4,
            text-center and rotate-90 that can becomposed to build any design,
            directly in your markup.
          </p>
        </div>
        <button className="w-[171px] h-[60px] flex justify-center sm: items-center bg-[#7D4AEA] font-medium text-lg text-white rounded-xl mt-[60px]">
          Try it out now
        </button>
        <ul className="flex mt-10 text-[13px] font-poppins gap-[25px] ">
          <li className="flex items-center ">
            <span className="mr-[10px] h-4 w-4 flex items-center justify-center">
              <img src="/images/tick-icon.svg" alt="tick-icon" />
            </span>{' '}
            Free and paid plans
          </li>
          <li className="flex items-center ">
            <span className="mr-[10px] h-4 w-4 flex items-center justify-center">
              <img src="/images/tick-icon.svg" alt="tick-icon" />
            </span>{' '}
            Setup in minutes
          </li>
          <li className="flex items-center ">
            <span className="mr-[10px] h-4 w-4 flex items-center justify-center">
              <img src="/images/tick-icon.svg" alt="tick-icon" />
            </span>{' '}
            No credit card required*
          </li>
        </ul>
        <div className="w-[800px] h-[468px] mt-[90px]  absolute flex bottom-[-234px] rounded-3xl font-poppins ">
          <div className="w-1/2 bg-white h-full flex flex-col items-center rounded-l-3xl">
            <div className="w-[106px] mt-[45px]">
              <img src="/images/home-page-pop-up/title.png" />
            </div>

            <div className="text-[40px] font-semibold mt-8">
              <h3>Join the club</h3>
            </div>
            <div className="mt-[30px] w-[271px] text-lg text-center">
              <p>
                Subscribe and Get an Extra
                <span className="font-semibold underline"> 25% Off</span> on
                your first purchase.
              </p>
            </div>
            <div className="w-full px-[50px] mt-[30px] ">
              <input
                className="border h-[50px] border-[#BBBBBB] rounded-lg w-full placeholder-[#777777] pl-[15px]  "
                type="email"
                placeholder="Email address"
                id="email"
              />
              <div className="w-full flex justify-between ">
                <button className="w-full h-[50px] mt-[15px] bg-black rounded-lg flex justify-center items-center text-white font-semibold">
                  Subscribe
                </button>
              </div>
              <div className="w-[250px] text-xs text-[#777777] mt-5">
                <p>
                  By signing up, you agree to{' '}
                  <span className="underline">Privacy Policy</span> and{' '}
                  <span className="underline">Terms of Use</span>.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full rounded-r-3xl">
            <div className="absolute w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center top-[25px] right-[25px]">
              <img src="/images/home-page-pop-up/close-icon.svg" />
            </div>
            <div className="w-[182px] h-[48px] bg-white absolute top-[106px] right-[-123px] rounded-xl flex items-center">
              <div className="ml-[14px]">
                <img
                  src="/images/home-page-pop-up/power-sign.png"
                  alt="power sign"
                />
              </div>
              <div className="ml-3 font-medium">
                <p>Grow email list</p>
              </div>
            </div>
            <div className="w-[269px] h-[48px] bg-white opacity-75 absolute top-[164px] right-[-195px] rounded-xl flex items-center">
              <div className="ml-[14px]">
                <img
                  src="/images/home-page-pop-up/dollar-sign.png"
                  alt="dollar sign"
                />
              </div>
              <div className="ml-3 font-medium">
                <p>Increase sales conversion</p>
              </div>
            </div>
            <div className="h-full w-full rounded-r-3xl overflow-hidden">
              <img src="/images/home-page-pop-up/banner.png" />
            </div>
            <div className="home-pop-up"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[630px] bg-[#666666]">
        <div className="flex gap-[120px] text-white w-full px-[242px] pt-[361px]">
          <div className="gap-[15px] flex flex-col">
            <h2 className="font-semibold text-[72px] leading-[80px]">3x</h2>
            <p className="font-medium leading-[22px] w-[122px]">
              Increase <br />
              Conversion Rate
            </p>
          </div>
          <div className="gap-[15px] flex flex-col">
            <h2 className="font-semibold text-[72px] leading-[80px]">120%</h2>
            <p className="font-medium leading-[22px] ">
              Email <br />
              Subscribers
            </p>
          </div>
          <div className="gap-[15px] flex flex-col">
            <h2 className="font-semibold text-[72px] leading-[80px]">390%</h2>
            <p className="font-medium leading-[22px] w-[123px">
              More Customer <br />
              Engagement
            </p>
          </div>
          <div className="gap-[15px] flex flex-col">
            <p className="text-[36px] font-semibold leading-[44px] w-[344px]">
              Popupsmart meets all your business needs.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
