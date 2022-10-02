import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { modalActions } from '../../store/modal-slice';

const UploadLogo = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const imageURL = useSelector(state => state.modal.imageURL);

  const clickHandler = () => {
    inputRef.current.click();
  };
  const addPhotoHandler = event => {
    const imgURL = URL.createObjectURL(event.target.files[0]);
    dispatch(modalActions.updateImageSrc(imgURL));
  };
  return (
    <div
      className="flex justify-center w-[378px] h-[178px] mt-[15px]   bg-white border-2 border-[#DDDDDD] border-dashed rounded-xl appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
      onClick={clickHandler}
    >
      <div className="flex flex-col items-center">
        {!imageURL ? (
          <div className="w-[80px] h-[80px] bg-[#F2EDFD]  rounded-[10px] mt-[30px] flex items-center justify-center">
            <img src="/images/apperance/image-icon.svg" />
          </div>
        ) : (
          <div className="w-[80px] h-[80px] mt-[30px] flex items-center justify-center">
            <img className="w-[80px]" src={imageURL} />
          </div>
        )}
        <div className="flex mt-5">
          <img src="/images/apperance/upload-icon.svg" />

          <div className="text-[14px] ml-[5px]">
            Drop your image here or{' '}
            <span className="text-[#7D4AEA] underline">upload</span>
          </div>
        </div>
      </div>
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={addPhotoHandler}
      />
    </div>
  );
};

export default UploadLogo;
