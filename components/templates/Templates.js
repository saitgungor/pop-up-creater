import { Fragment } from 'react';
import Modal_1 from '../Modal_1';
import Modal_2 from '../Modal_2';
import Modal_3 from '../Modal_3';
import Modal_4 from '../Modal_4';
import TemplateITem from '../templates/TemplateItem';
import Steps from '../UI/Steps';

const Templates = props => {
  return (
    <Fragment>
      <Steps number="1" text="Choose your template" />
      <div className="w-full grid grid-cols-4 grid-rows-3 h-[660px] gap-[30px] mt-[50px]">
        <TemplateITem>
          <Modal_1 id="1" />
        </TemplateITem>
        <TemplateITem>
          <Modal_2 id="2" />
        </TemplateITem>
        <TemplateITem>
          <Modal_3 id="3" />
        </TemplateITem>
        <TemplateITem>
          <Modal_4 id="4" />
        </TemplateITem>
        <TemplateITem>
          <Modal_1 id="1" />
        </TemplateITem>
        <TemplateITem>
          <Modal_2 id="2" />
        </TemplateITem>
        <TemplateITem>
          <Modal_3 id="3" />
        </TemplateITem>
        <TemplateITem>
          <Modal_4 id="4" />
        </TemplateITem>
        <TemplateITem>
          <Modal_1 id="1" />
        </TemplateITem>
        <TemplateITem>
          <Modal_2 id="2" />
        </TemplateITem>
        <TemplateITem>
          <Modal_3 id="3" />
        </TemplateITem>
        <TemplateITem>
          <Modal_4 id="4" />
        </TemplateITem>
      </div>
    </Fragment>
  );
};

export default Templates;
