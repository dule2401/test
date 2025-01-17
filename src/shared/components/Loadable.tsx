import { Suspense, ElementType } from 'react';

export const Loadable = (Fallback: ElementType) => (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<Fallback />}>
      <Component {...props} />
    </Suspense>
  );
};
