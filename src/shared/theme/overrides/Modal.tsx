//
import { css } from '@/shared/styles';
import { prefixAntdCls } from '../config';

// @ts-ignore-start
export const wrapClassName = css({
  [`.${prefixAntdCls}-modal-confirm-body .${prefixAntdCls}-modal-confirm-content`]: {
    margin: '0 !important',
  },

  [`.${prefixAntdCls}-modal-content`]: {
    borderRadius: '$space$4',

    [`.${prefixAntdCls}-modal-body`]: {
      py: '70px',
      '@sm': {
        py: '$space$6',
      },
    },
  },

  [`.${prefixAntdCls}-modal-confirm .${prefixAntdCls}-modal-confirm-btns`]: {
    display: 'none',
  },
})();
