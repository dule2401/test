import { useEffect, useRef } from 'react';

export const useVisibilityInterval = (callback: VoidFunction, delay = 1000) => {
  const latestCallback = useRef(() => {});
  const intervalId = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    latestCallback.current = callback;
  });

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (intervalId.current) {
          clearInterval(intervalId.current);
        }
        return;
      }

      if (delay !== null) {
        intervalId.current && clearInterval(intervalId.current);
        intervalId.current = setInterval(() => latestCallback.current(), delay || 0);
      }
    };
    handleVisibilityChange();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [delay]);
};
