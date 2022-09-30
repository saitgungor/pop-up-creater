import Link from 'next/link';

const MainNavigation = () => {
  return (
    <header className="mt-[23px] w-full">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img src="/images/logo.svg" />
              <span className="font-extrabold ml-[10px]">modal.cards</span>
            </div>
          </Link>
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
            <Link href="/templates">
              <a>Try for free</a>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
