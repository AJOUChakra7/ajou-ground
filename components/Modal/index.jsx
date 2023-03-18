import { useState } from 'react';
import useModal from './useModal';

export default function Modal(props) {
  const { title, subTitle, selected } = props;

  const dialog = document.querySelector('dialog');
  const { closeModal } = useModal(dialog);

  const confirmAction = () => {
    selected();
    closeModal();
  }

  return (
    <dialog className="hidden rounded-md gap-2 w-1/2 full:w-[16rem] flex flex-col text-center justify-center items-center">
      <h2 className="font-bold text-[22px] text-primary-main">{title}</h2>
      <h3 className="font-400 text-[18px]">{subTitle}</h3>
      <div className="flex text-[17px] justify-around w-full">
        <button className="font-light" onClick={closeModal}>취소</button>
        <button className="text-primary-main font-bold" onClick={confirmAction}>확인</button>
      </div>
    </dialog>
  )
}

