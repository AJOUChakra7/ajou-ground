'use client'

import { Icon } from '@iconify/react';
import { useState, useCallback, useEffect, useRef } from 'react';
import { toastConfig } from '@styles/config';
import styled from 'styled-components';


//
// message : 상태 메세지 입력
// type : 'warn, error, success' 세 가지 타입 존재
// 1.5초 동안 위에 띄워집니다
//

export const ToastMessage= (props) => {
  const { message, type } = props; 

  const toastId = useRef(null);
  const [animationState, setAnimationState] = useState('fadeIn');
  const [messageState, setMessageState] = useState(false);
  const isType = toastConfig.filter((e) => e.type === type);

  const removeToast = useCallback(() => {
    if (toastId.current) clearTimeout(toastId.current);
    setAnimationState('fadeOut');
    setTimeout(() => {
      setMessageState(false);
      localStorage.clear();
      setAnimationState('fadeIn');
    }, 350);
  }, [message, type]);

  useEffect(() => {
    if (message === '') return;
    if (toastId.current) clearTimeout(toastId.current);

    setMessageState(true);
    toastId.current = setTimeout(() => {
      removeToast();
    }, 1500);
  }, [message]);

  return (
    <>
      {messageState && (
        <ToastContainer
          onClick={() => removeToast()}
          animation={animationState}
          color={isType[0].color}
        >
          <Icon icon={isType[0].icon} width="36" height="36" color={isType[0].color} />
          <span>{message}</span>
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
