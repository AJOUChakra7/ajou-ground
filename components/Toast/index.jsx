'use client'

import { Icon } from '@iconify/react';
import { useState, useCallback, useEffect, useRef } from 'react';
import useToastMessage from './hooks/useToastMessage';
import { toastConfig } from '@styles/config';
import styled from 'styled-components';

const toast = {
  message : '메세지 입니다',
  type : 'success',
}

export const ToastMessage= () => {
  const { closeToastMessage } = useToastMessage();
  const toastId = useRef(null);
  const [animationState, setAnimationState] = useState('fadeIn');
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
      {toast.message && (
        <ToastContainer
          onClick={() => removeToast()}
          animation={animationState}
          color={isType[0].color}
        >
          <Icon icon={isType[0].icon} width="36" height="36" color={isType[0].color} />
          <p>{toast.message}</p>
        </ToastContainer>
      )}
    </>
  );
};

// style--------------------------------

export const ToastContainer = styled.div`
  position : fixed;
  top : 1rem;
  max-width : 23rem;
  width : 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  opacity: 0;
  margin: 0 auto;
  padding: 0.6rem 2rem 0.6rem 1.75rem;

  border-radius: 0.625rem;
  background: rgba(255, 255, 255, 1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);

  -webkit-box-shadow: -0.5px 1.5px 15px -2px ${(props) => props.color};
  -moz-box-shadow: -0.5px 1.5px 15px -2px ${(props) => props.color};
  box-shadow: -0.5px 1.5px 15px -2px ${(props) => props.color};

  animation: 0.35s ${(props) => props.animation} ease-in-out forwards;
  transition: 0.35s ease-in-out;

  @keyframes fadeIn {
    from {
      transform: translateY(-2rem);
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;


export default ToastMessage;
