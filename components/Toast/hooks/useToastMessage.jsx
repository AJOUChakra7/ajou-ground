'use client'
import { useCallback, useState } from 'react';

export default function useToastMessage(timeout) {
  const [toast, setToast] = useState(
    {
      meesage : '메세지 입니다',
      type : 'success'
    }
  );

  const openToastMessage = useCallback(
    (message, type) => {
      setToast({ message, timeout: timeout ?? 1500, type: type ?? 'error' });
    },
    [toast.message, toast.type],
  );

  const closeToastMessage = () => {
    setToast({ ...toast, message: '' });
  };

  return { openToastMessage, closeToastMessage };
}
