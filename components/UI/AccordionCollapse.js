import { useState } from 'react';

const AccordionCollapse = () => {
  const [state, setState] = useState();
  const onOpenHandler = event => {
    const accordionId = event.target.id;
    switch (accordionId[accordionId.length - 1]) {
      case '1':
        setState('open1');
        break;
      case '2':
        setState('open2');
        break;
      case '3':
        setState('open3');
        break;
      case '4':
        setState('open4');
        break;
      case '5':
        setState('open5');
        break;
    }
  };

  const onCloseHandler = () => {
    setState(false);
  };
  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="mt-[50px] text-left "
    >
      <div id="accordion-collapse-1">
        <div className="border-[#EAEAEA] border-y-[1px] h-[74px] flex justify-between items-center pl-[30px]">
          <h2 className="text-[18px] text-[#777777] font-semibold ">
            How do I pay for the essentials or premium plan?
          </h2>
          <div className="pr-8 cursor-pointer">
            <img
              src="/images/frequently-asked/add-icon.svg"
              alt="add-icon"
              id="accordion-collapse-open-1"
              onClick={onOpenHandler}
            />
          </div>
        </div>
        <div
          className={`h-[178px] bg-[#f5f5f5] pl-[30px] ${
            state !== 'open1' && 'hidden'
          }`}
        >
          <div className="flex justify-between items-center pt-[25px]">
            <h3 className="text-[18px] font-semibold ">
              Can I cancel my essentials or premium plan subscription at my
              time?
            </h3>
            <div className="pr-8 cursor-pointer">
              <img
                src="/images/frequently-asked/remove-icon.svg"
                alt="remove-icon"
                onClick={onCloseHandler}
              />
            </div>
          </div>
          <p className="w-[870px] mt-5 leading-[26px] pb-[30px]">
            You can pay with a credit card or via net banking (if you’re in
            United States). We willrenew your subscription automatically at the
            end of every billing cycle. You can paywith a credit card or via net
            banking (if you’re in United States). We will renew your
            subscription automatically at the end of every billing cycle.
          </p>
        </div>
      </div>
      <div id="accordion-collapse-2">
        <div className="border-[#EAEAEA] border-y-[1px] h-[74px] flex justify-between items-center pl-[30px]">
          <h2 className="text-[18px] text-[#777777] font-semibold ">
            How do I pay for the essentials or premium plan?
          </h2>
          <div className="pr-8 cursor-pointer">
            <img
              src="/images/frequently-asked/add-icon.svg"
              alt="add-icon"
              id="accordion-collapse-open-2"
              onClick={onOpenHandler}
            />
          </div>
        </div>
        <div
          className={`h-[178px] bg-[#f5f5f5] pl-[30px] ${
            state !== 'open2' && 'hidden'
          }`}
        >
          <div className="flex justify-between items-center pt-[25px]">
            <h3 className="text-[18px] font-semibold ">
              Can I cancel my essentials or premium plan subscription at my
              time?
            </h3>
            <div className="pr-8 cursor-pointer">
              <img
                src="/images/frequently-asked/remove-icon.svg"
                alt="remove-icon"
                onClick={onCloseHandler}
              />
            </div>
          </div>
          <p className="w-[870px] mt-5 leading-[26px] pb-[30px]">
            You can pay with a credit card or via net banking (if you’re in
            United States). We willrenew your subscription automatically at the
            end of every billing cycle. You can paywith a credit card or via net
            banking (if you’re in United States). We will renew your
            subscription automatically at the end of every billing cycle.
          </p>
        </div>
      </div>
      <div id="accordion-collapse-3">
        <div className="border-[#EAEAEA] border-y-[1px] h-[74px] flex justify-between items-center pl-[30px]">
          <h2 className="text-[18px] text-[#777777] font-semibold ">
            We need to add new users to our team, how will that be billed?
          </h2>
          <div className="pr-8 cursor-pointer">
            <img
              src="/images/frequently-asked/add-icon.svg"
              alt="add-icon"
              id="accordion-collapse-open-3"
              onClick={onOpenHandler}
            />
          </div>
        </div>
        <div
          className={`h-[178px] bg-[#f5f5f5] pl-[30px] ${
            state !== 'open3' && 'hidden'
          }`}
        >
          <div className="flex justify-between items-center pt-[25px]">
            <h3 className="text-[18px] font-semibold ">
              Can I cancel my essentials or premium plan subscription at my
              time?
            </h3>
            <div className="pr-8 cursor-pointer">
              <img
                src="/images/frequently-asked/remove-icon.svg"
                alt="remove-icon"
                onClick={onCloseHandler}
              />
            </div>
          </div>
          <p className="w-[870px] mt-5 leading-[26px] pb-[30px]">
            You can pay with a credit card or via net banking (if you’re in
            United States). We willrenew your subscription automatically at the
            end of every billing cycle. You can paywith a credit card or via net
            banking (if you’re in United States). We will renew your
            subscription automatically at the end of every billing cycle.
          </p>
        </div>
      </div>
      <div id="accordion-collapse-4">
        <div className="border-[#EAEAEA] border-y-[1px] h-[74px] flex justify-between items-center pl-[30px]">
          <h2 className="text-[18px] text-[#777777] font-semibold ">
            How do I pay for the essentials or premium plan?
          </h2>
          <div className="pr-8 cursor-pointer">
            <img
              src="/images/frequently-asked/add-icon.svg"
              alt="add-icon"
              id="accordion-collapse-open-4"
              onClick={onOpenHandler}
            />
          </div>
        </div>
        <div
          className={`h-[178px] bg-[#f5f5f5] pl-[30px] ${
            state !== 'open4' && 'hidden'
          }`}
        >
          <div className="flex justify-between items-center pt-[25px]">
            <h3 className="text-[18px] font-semibold ">
              Can I cancel my essentials or premium plan subscription at my
              time?
            </h3>
            <div className="pr-8 cursor-pointer">
              <img
                src="/images/frequently-asked/remove-icon.svg"
                alt="remove-icon"
                onClick={onCloseHandler}
              />
            </div>
          </div>
          <p className="w-[870px] mt-5 leading-[26px] pb-[30px]">
            You can pay with a credit card or via net banking (if you’re in
            United States). We willrenew your subscription automatically at the
            end of every billing cycle. You can paywith a credit card or via net
            banking (if you’re in United States). We will renew your
            subscription automatically at the end of every billing cycle.
          </p>
        </div>
      </div>
      <div id="accordion-collapse-5">
        <div className="border-[#EAEAEA] border-y-[1px] h-[74px] flex justify-between items-center pl-[30px]">
          <h2 className="text-[18px] text-[#777777] font-semibold ">
            Can I cancel my essentials or premium plan subscription at my time?
          </h2>
          <div className="pr-8 cursor-pointer">
            <img
              src="/images/frequently-asked/add-icon.svg"
              alt="add-icon"
              id="accordion-collapse-open-5"
              onClick={onOpenHandler}
            />
          </div>
        </div>
        <div
          className={`h-[178px] bg-[#f5f5f5] pl-[30px] ${
            state !== 'open5' && 'hidden'
          }`}
        >
          <div className="flex justify-between items-center pt-[25px]">
            <h3 className="text-[18px] font-semibold ">
              Can I cancel my essentials or premium plan subscription at my
              time?
            </h3>
            <div className="pr-8 cursor-pointer">
              <img
                src="/images/frequently-asked/remove-icon.svg"
                alt="remove-icon"
                onClick={onCloseHandler}
              />
            </div>
          </div>
          <p className="w-[870px] mt-5 leading-[26px] pb-[30px]">
            You can pay with a credit card or via net banking (if you’re in
            United States). We willrenew your subscription automatically at the
            end of every billing cycle. You can paywith a credit card or via net
            banking (if you’re in United States). We will renew your
            subscription automatically at the end of every billing cycle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionCollapse;
