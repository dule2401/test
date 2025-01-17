import { useEffect } from 'react';

export const useUnsaveChangesNotify = () => {
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      e.returnValue = true;
    };
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, []);
};
