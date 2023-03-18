import { Icon } from '@iconify/react';
import { useState, useCallback, useEffect, useRef } from 'react';
import useToastMessage from './hooks/useToastMessage';
import { toastConfig } from '@styles/config';

const toast = {
  message : '메세지 입니다',
  type : 'success',
}

export const ToastMessage= () => {
  const { closeToastMessage } = useToastMessage();
  const toastId = useRef<null | ReturnType<typeof setTimeout>>(null);
  const [animationState, setAnimationState] = useState<string>('fadeIn');
  const isType = toastConfig.filter((e) => e.type === toast.type);

  const removeToast = useCallback(() => {
    if (toastId.current) clearTimeout(toastId.current);
    setAnimationState('fadeOut');
    setTimeout(() => {
      closeToastMessage();
      setAnimationState('fadeIn');
    }, 350);
  }, [toast.message, toast.type]);

  useEffect(() => {
    if (toast.message === '') return;
    if (toastId.current) clearTimeout(toastId.current);

    toastId.current = setTimeout(() => {
      removeToast();
    }, toast.timeout);
  }, [toast.message]);

  return (
    <>
      <section className=""
        onClick={() => removeToast()}
        animation={animationState}
        color={isType[0].color}
      >
        <Icon icon={isType[0].icon} width="36" height="36" color={isType[0].color} />
        <p>{toast.message}</p>
      </section>
    </>
  );
};

export default ToastMessage;
