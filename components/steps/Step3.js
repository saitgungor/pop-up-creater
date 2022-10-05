import Steps from '../UI/Steps';
import ChangeContent1 from '../UI/ChangeContent1';
import ChangeContent2 from '../UI/ChangeContent2';
import ChangeContent3 from '../UI/ChangeContent3';
import ChangeContent4 from '../UI/ChangeContent4';
import ChangeContent5 from '../UI/ChangeContent5';

const Step3 = () => {
  return (
    <div className="w-1/3 flex flex-col">
      <Steps number="3" text="Content" />
      <div className="text-[14px] mt-[30px]">Edit your content</div>
      <ChangeContent1 />
      <ChangeContent2 />
      <ChangeContent3 />
      <ChangeContent4 />
      <ChangeContent5 />
    </div>
  );
};
export default Step3;
