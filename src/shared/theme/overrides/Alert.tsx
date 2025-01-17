import { Alert } from 'antd';
//
import { styled } from '@/shared/styles';
import { prefixAntdCls } from '../config';

// @ts-ignore-start
export const StyledAlert = styled(Alert, {
  alignItems: 'center !important',
  px: '$space$6 !important',
  py: '$space$3 !important',

  [`&.${prefixAntdCls}-alert`]: {
    border: 'none',
    borderRadius: '0',
  },
  [`&.${prefixAntdCls}-alert-warning`]: {
    backgroundColor: '$warningPastel',
  },
  [`&.${prefixAntdCls}-alert-error`]: {
    backgroundColor: '$redMBPastel',
  },

  [`&.${prefixAntdCls}-alert-with-description .${prefixAntdCls}-alert-icon`]: {
    marginRight: '$space$4 !important',
  },
});
