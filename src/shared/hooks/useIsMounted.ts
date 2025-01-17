import { useEffect, useRef } from 'react';

export function useIsMounted() {
  const isMountedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
    }
  }, []);

  return isMountedRef.current;
}
