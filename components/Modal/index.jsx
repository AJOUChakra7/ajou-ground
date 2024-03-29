import { useState,useEffect } from 'react';
import useModal from './useModal';

export default function Modal(props) {
  const { title, subtitle, subtitle2, subtitle3, selected } = props;
  const [dialog, setDialog] = useState('')
  const { closeModal } = useModal(dialog);
  useEffect(() => {
    setDialog(document.querySelector('dialog'))
  }, []);

  const confirmAction = () => {
    selected();
    closeModal();
  }

  return (
    <dialog className="hidden gap-1 py-7 rounded-md w-1/2 full:w-[16rem] flex-col text-center justify-center items-center">
      <h2 className="font-bold text-[22px] text-primary-main pb-4">{title}</h2>
      <h2 className="font-bold text-primary-dark text-[24px]">{subtitle}</h2>
      <h3 className="font-400 text-[26px]">{subtitle2}</h3>
      <h3 className="font-400 text-gray-400 text-[16px]">{subtitle3}</h3>
      <div className="flex text-[17px] justify-around w-full pt-8">
        <button className="font-light" onClick={closeModal}>취소</button>
        <button className="text-primary-main font-bold" onClick={confirmAction}>확인</button>
      </div>
    </dialog>
  )
}

