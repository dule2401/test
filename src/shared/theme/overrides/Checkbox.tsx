import { Checkbox } from 'antd';
import { styled } from '@/shared/styles';
import { prefixAntdCls } from '../config';
import { ComponentProps } from 'react';

// @ts-ignore-start
export const StyledAntdCheckbox = styled(Checkbox, {
  [`.${prefixAntdCls}-checkbox-inner`]: {
    width: '20px',
    height: '20px',
    borderWidth: '2px',
    borderColor: '$black111',
    borderRadius: '$space$1',
    '&:hover': {
      borderColor: '$colors$blueMB !important',
    },
  },

  [`&:hover .${prefixAntdCls}-checkbox-inner`]: {
    borderColor: '$colors$blueMB !important',
  },

  [`.${prefixAntdCls}-checkbox`]: {
    '& + span': {
      color: '$black111',
      fontSize: ' 14px',
      lineHeight: '22px',
      alignSelf: 'center',
    },

    [`&.${prefixAntdCls}-checkbox-disabled + span`]: {
      color: '$light999',
    },
  },

  [`.${prefixAntdCls}-checkbox-checked`]: {
    '& + span': {
      color: '$blueMB',
    },
    '&:after': {
      border: 'none',
    },
    [`.${prefixAntdCls}-checkbox-inner`]: {
      borderColor: '$blueMB',
    },

    [`.${prefixAntdCls}-checkbox-input:focus + .${prefixAntdCls}-checkbox-inner`]: {
      borderColor: '$blueMB',
    },
  },

  [`.${prefixAntdCls}-checkbox-input:focus + .${prefixAntdCls}-checkbox-inner`]: {
    borderColor: '$black111',
  },

  [`.${prefixAntdCls}-checkbox-disabled`]: {
    [`.${prefixAntdCls}-checkbox-inner`]: {
      backgroundColor: 'transparent !important',
      borderColor: '$light999 !important',
    },
  },

  variants: {
    variant: {
      primary: {
        [`& .${prefixAntdCls}-checkbox-checked:not(.${prefixAntdCls}-checkbox-disabled)`]: {
          [`.${prefixAntdCls}-checkbox-inner`]: {
            backgroundColor: '$blueMB',
            '&::after': {
              borderColor: '$white',
            },
          },
        },
      },
      text: {
        [`& .${prefixAntdCls}-checkbox-checked:not(.${prefixAntdCls}-checkbox-disabled)`]: {
          [`.${prefixAntdCls}-checkbox-inner`]: {
            backgroundColor: '$white ',
            '&::after': {
              borderColor: '$blueMB',
            },
          },
        },
      },
      borderred: {
        '&': {
          [`& .${prefixAntdCls}-checkbox-checked:not(.${prefixAntdCls}-checkbox-disabled)`]: {
            [`.${prefixAntdCls}-checkbox-inner`]: {
              backgroundColor: '$blueMB',
              '&::after': {
                borderColor: '$white',
              },
            },
          },
          background: '$colors$bg1f9',
          padding: '$1 $2 !important',
          borderRadius: '$space$1',
          border: '1px solid $colors$stroke1',
          [`& .${prefixAntdCls}-checkbox + span`]: {
            fontWeight: '600',
          },
        },
      },
    },
    direction: {
      reverse: {
        '&': {
          flexDirection: 'row-reverse',
          [`& .${prefixAntdCls}-checkbox + span`]: {
            paddingLeft: 0,
            paddingRight: '$3',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const StyledCheckboxGroup = styled(Checkbox.Group, {
  [`.${prefixAntdCls}-checkbox-wrapper + .${prefixAntdCls}-checkbox-wrapper`]: {
    marginLeft: 0,
  },
});

export type StyledAntdCheckboxProps = ComponentProps<typeof Checkbox> & {
  variant?: 'primary' | 'text' | 'borderred';
  direction?: 'reverse';
};
