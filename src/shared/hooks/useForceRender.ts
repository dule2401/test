import { useCallback, useState } from 'react';

// forcerender -> render value
export const useForceRender = () => {
  const [, setState] = useState(false);
  const forceRender = useCallback(() => setState((prev) => !prev), []);
  return { forceRender };
};
