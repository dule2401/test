import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

export const Portal = ({ children }: PropsWithChildren<unknown>) => {
  return ReactDOM.createPortal(children, document.querySelector('body')!);
};
