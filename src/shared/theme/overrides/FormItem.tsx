import { styled } from '@/shared/styles';
import { prefixAntdCls } from '@/shared/theme/config';
import { Form } from 'antd';

export const StyledFormItem = styled(
  Form.Item,
  {
    [`&.${prefixAntdCls}-form-item `]: {
      marginBottom: '$5',
    },

    [`& .${prefixAntdCls}-form-item-explain-error`]: {
      color: '$error1',
    },

    [`& label.${prefixAntdCls}-form-item-required`]: {
      alignItems: 'baseline',
    },

    [`& .${prefixAntdCls}-form-item-label`]: {
      overflow: 'initial',
      textAlign: 'left',

      [`& > label`]: {
        height: 'auto',
      },
    },
    // DatePicker
    [`&.${prefixAntdCls}-form-item-has-error .MuiInputBase-root`]: {
      borderColor: '$error1 !important',
    },
  },
  {
    variants: {
      noMargin: {
        true: {
          [`&.${prefixAntdCls}-form-item `]: {
            marginBottom: '0',
          },
        },
      },
    },
  },
);
