import { useEffect, useRef } from 'react';

// hook interval
export const useInterval = (callback: VoidFunction, delay = 1000) => {
  const latestCallback = useRef(() => {});

  useEffect(() => {
    latestCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => latestCallback.current(), delay || 0);
      return () => {
        clearInterval(interval);
      };
    }
    return undefined;
  }, [delay]);
};
