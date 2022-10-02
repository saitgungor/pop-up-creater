import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal-slice';

const TemplateItem = props => {
  const router = useRouter();
  const dispatch = useDispatch();

  const selectTemplateHander = () => {
    const id = props.children.props.id;
    router.push('/apperance/' + id);
    dispatch(modalActions.selectModalHandler(id));
  };
  return (
    <div className="bg-[#F5F5F5] flex justify-center items-center border border-[#EAEAEA] rounded-xl relative  ">
      <div className="scale-[.30]">{props.children}</div>
      <div className="h-full w-full bg-[#7D4AEA99] rounded-xl  absolute opacity-0 hover:opacity-100 flex items-center justify-center ">
        <button
          className="rounded-lg bg-white font-semibold px-[15px] py-[10px] text-[#7D4AEA]"
          onClick={selectTemplateHander}
        >
          Select template
        </button>
      </div>
    </div>
  );
};

export default TemplateItem;
