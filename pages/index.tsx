import { Fragment, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import MainNavigation from '../components/layout/MainNavigation';
import Link from 'next/link';
import AccordionCollapse from '../components/UI/AccordionCollapse';
import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(modalActions.resetModal(''));
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Pop-up Creater by OSG</title>
        <link rel="icon" href="/images/popup-icon.svg" />
      </Head>
      <div className="px-[243px] h-[900px] flex flex-col w-full bg-gradient-to-b  from-[#FFFFFF] to-[#E3F2F6] relative">
        <MainNavigation />
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
        <Link href="/templates">
          <button className="w-[171px] h-[60px] flex justify-center sm: items-center bg-[#7D4AEA] font-medium text-lg text-white rounded-xl mt-[60px]">
            <a>Try it out now</a>
          </button>
        </Link>
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
      <div className="px-[243px] mt-[90px] justify-center text-center font-poppins">
        <h2 className="text-4xl font-semibold w-full">
          Conversion & UX ready popups & modals
        </h2>
        <div className="grid grid-cols-3 gap-[30px] mt-[50px]">
          <div className="h-[267px] bg-[#F5F5F5] flex flex-col items-center">
            <div className="mt-[54px]">
              <img
                className="w-8 h-10"
                src="/images/conversion-ux/pixel-perfect.svg"
                alt="pixel-perfect"
              />
            </div>
            <div className="font-semibold text-[18px] mt-6 ">Pixel Perfect</div>
            <p className="text-sm mt-[10px] w-[237px]">
              Helps you calculate your email marketing roi to measure success.
            </p>
          </div>
          <div className="h-[267px] bg-[#F5F5F5] flex flex-col items-center">
            <div className="mt-[54px]">
              <img
                className="w-8 h-10"
                src="/images/conversion-ux/conversion-ready.svg"
                alt="conversion-ready"
              />
            </div>
            <div className="font-semibold text-[18px] mt-6 ">
              Conversion Ready
            </div>
            <p className="text-sm mt-[10px] w-[237px]">
              Empowers your emails by generating afree code for a CTA in your
              subject line.
            </p>
          </div>
          <div className="h-[267px] bg-[#F5F5F5] flex flex-col items-center">
            <div className="mt-[54px]">
              <img
                className="w-8 h-10"
                src="/images/conversion-ux/modern-usefull.svg"
                alt="modern-usefull"
              />
            </div>
            <div className="font-semibold text-[18px] mt-6 ">
              Modern & Useful
            </div>
            <p className="text-sm mt-[10px] w-[237px]">
              Enables you to estimate the total profit of your investment on a
              popup service.
            </p>
          </div>
        </div>
      </div>
      <div className="px-[243px] mt-[90px] justify-center text-center font-poppins">
        <h2 className="text-4xl font-semibold w-full">
          Frequently Asked Questions
        </h2>
        <AccordionCollapse />
      </div>
      <div className="px-[243px] mt-[120px] justify-center text-center font-poppins">
        <h2 className="text-4xl font-semibold w-full">
          Build great popups without code
        </h2>
        <div className="flex justify-between mt-[70px]">
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] bg-[#7D4AEA] rounded-full flex items-center justify-center">
              <img
                src="/images/build-great-popups/target-icon.svg"
                alt="target-icon"
              />
            </div>
            <h3 className="pt-[30px] text-[18px] font-semibold">
              Targeting Options
            </h3>
            <p className="pt-[10px] text-sm max-w-[230px]">
              Target +26 trigger to your visitors
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] bg-[#7D4AEA] rounded-full flex items-center justify-center">
              <img
                src="/images/build-great-popups/no-code-icon.svg"
                alt="no-code-icon"
              />
            </div>
            <h3 className="pt-[30px] text-[18px] font-semibold">No-Code</h3>
            <p className="pt-[10px] text-sm max-w-[230px]">
              No code required while you’re creating a popup
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] bg-[#7D4AEA] rounded-full flex items-center justify-center">
              <img
                src="/images/build-great-popups/target-option-icon.svg"
                alt="target-option-icon"
              />
            </div>
            <h3 className="pt-[30px] text-[18px] font-semibold">
              Targeting Options
            </h3>
            <p className="pt-[10px] text-sm max-w-[230px]">
              Integrated with your marketing and CRM platforms
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] bg-[#7D4AEA] rounded-full flex items-center justify-center">
              <img
                src="/images/build-great-popups/aws-icon.svg"
                alt="aws-icon"
              />
            </div>
            <h3 className="pt-[30px] text-[18px] font-semibold">
              Targeting Options
            </h3>
            <p className="pt-[10px] text-sm max-w-[230px]">
              Don’t worry about speed and Amazon AWS resources
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col font-poppins items-center mt-[80px]">
        <img src="/images/popup-icon.svg" alt="popup-icon" />
        <p className="text-xs pt-[15px] pb-[80px]">Powered by Popupsmart</p>
      </div>
    </Fragment>
  );
};

export default Home;
