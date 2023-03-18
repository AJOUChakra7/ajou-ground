import { useRecoilState } from 'recoil';
import { setToastState } from '@/Utils/Stores/Recoil/toast';
import { useCallback } from 'react';



export default function useToastMessage(timeout) {
  const [toast, setToast] = useRecoilState(setToastState);

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
