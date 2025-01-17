import { InputNumber as AntdInputNumber, InputNumberProps } from 'antd';
//
import { styled } from '@/shared/styles';

import { prefixAntdCls } from '../config';

// @ts-ignore-start
export const StyledAntdInputNumber = styled(AntdInputNumber, {
  $$primBorderColor: '$colors$blueMB',
  $$errorColor: '$colors$error1',

  [`&.${prefixAntdCls}-input-number-group-wrapper`]: {
    width: '100%',
  },
  [`.${prefixAntdCls}-input-number-input:not(:disabled)::placeholder`]: {
    color: '$gray76',
  },
  [`&.${prefixAntdCls}-input-number-affix-wrapper, 
    & .${prefixAntdCls}-input-number-affix-wrapper`]: {
    width: '100%',
    paddingInlineStart: '0',
    borderColor: `$stroke1`,
  },
  [`&.${prefixAntdCls}-input-number`]: {
    width: '100%',
    fontSize: '14px',
    padding: '$space$4',
    borderColor: `$stroke1`,
    color: '$black111',

    [`&.${prefixAntdCls}-input-number-sm`]: {
      padding: '6px $space$3',
    },

    [`&.${prefixAntdCls}-input-number-lg`]: {
      padding: '19px $space$4',
    },

    [`& .${prefixAntdCls}-input-number-input`]: {
      height: '100%',
      padding: '0px',
    },
  },
  [`& .${prefixAntdCls}-input-number-group-addon`]: {
    borderColor: `$stroke1`,
    background: '$bg1f9',
    fontWeight: 600,
    color: '$black111',
    paddingLeft: 0,
  },
  [`.${prefixAntdCls}-input-number-group`]: {
    [`& > .${prefixAntdCls}-input-number:first-child, 
      & .${prefixAntdCls}-input-number-affix-wrapper`]: {
      borderRight: 0,
    },
  },
  [`& .${prefixAntdCls}-input-number-handler`]: {
    borderLeft: '0',
  },
  [`&.${prefixAntdCls}-input-number:not(.${prefixAntdCls}-input-number-disabled):not(.${prefixAntdCls}-input-number-readonly):hover, 
    &.${prefixAntdCls}-input-number-group-wrapper:hover, 
    &.${prefixAntdCls}-input-number:not(.${prefixAntdCls}-input-number-disabled):not(.${prefixAntdCls}-input-number-readonly):focus,
    &.${prefixAntdCls}-input-number-focused,
    & .${prefixAntdCls}-input-number-affix-wrapper-focused:not(.${prefixAntdCls}-input-number-affix-wrapper-disabled), 
    & .${prefixAntdCls}-input-number-affix-wrapper:not(.${prefixAntdCls}-input-number-affix-wrapper-disabled):hover`]:
    {
      [`&, & + .${prefixAntdCls}-input-number-group-addon`]: {
        borderColor: '$$primBorderColor',
      },
    },

  [`&.${prefixAntdCls}-input-number:focus, 
    &.${prefixAntdCls}-input-number-focused,
    &.${prefixAntdCls}-input-number-affix-wrapper:focus, 
    &.${prefixAntdCls}-input-number-affix-wrapper-focused,
    & .${prefixAntdCls}-input-number-affix-wrapper:focus, 
    & .${prefixAntdCls}-input-number-affix-wrapper-focused,
    &.${prefixAntdCls}-input-number-affix-wrapper-status-error:not(.${prefixAntdCls}-input-number-affix-wrapper-disabled):not(.${prefixAntdCls}-input-number-affix-wrapper-borderless).${prefixAntdCls}-input-number-affix-wrapper:focus, 
    &.${prefixAntdCls}-input-number-affix-wrapper-status-error:not(.${prefixAntdCls}-input-number-affix-wrapper-disabled):not(.${prefixAntdCls}-input-number-affix-wrapper-borderless).${prefixAntdCls}-input-number-affix-wrapper-focused
    `]: {
    boxShadow: 'none !important',
  },

  // Readonly
  [`&.${prefixAntdCls}-input-number-readonly`]: {
    borderColor: '$stroke1 !important',
    pointerEvents: 'none',

    [`&.${prefixAntdCls}-input-number, & + .${prefixAntdCls}-input-number-group-addon`]: {
      color: '$gray76',
    },
  },

  // Error
  [`&.${prefixAntdCls}-input-number-group-wrapper-status-error .${prefixAntdCls}-input-number-group-addon`]:
    {
      color: '$$errorColor !important',
      borderColor: '$$errorColor !important',
      background: '$white !important',
    },
  [`&.${prefixAntdCls}-input-number-affix-wrapper-status-error:not(.${prefixAntdCls}-input-number-affix-wrapper-disabled):not(.${prefixAntdCls}-input-number-affix-wrapper-borderless).${prefixAntdCls}-input-number-affix-wrapper,
    &.${prefixAntdCls}-input-number-affix-wrapper-status-error:not(.${prefixAntdCls}-input-number-affix-wrapper-disabled):not(.${prefixAntdCls}-input-number-affix-wrapper-borderless).${prefixAntdCls}-input-number-affix-wrapper:hover,
    &.${prefixAntdCls}-input-number-status-error:not(.${prefixAntdCls}-input-number-disabled):not(.${prefixAntdCls}-input-number-borderless).${prefixAntdCls}-input-number, 
    &.${prefixAntdCls}-input-number-status-error:not(.${prefixAntdCls}-input-number-disabled):not(.${prefixAntdCls}-input-number-borderless).${prefixAntdCls}-input-number:hover`]:
    {
      borderColor: '$$errorColor !important',
      color: '$$errorColor !important',
    },
  [`.${prefixAntdCls}-input-number-affix-wrapper-status-error:not(.${prefixAntdCls}-input-number-affix-wrapper-disabled):not(.${prefixAntdCls}-input-number-affix-wrapper-borderless).${prefixAntdCls}-input-number-affix-wrapper, 
    .${prefixAntdCls}-input-number-affix-wrapper-status-error:not(.${prefixAntdCls}-input-number-affix-wrapper-disabled):not(.${prefixAntdCls}-input-number-affix-wrapper-borderless).${prefixAntdCls}-input-number-affix-wrapper:hover`]:
    {
      borderColor: '$$errorColor !important',
      color: '$$errorColor !important',
      [`& .${prefixAntdCls}-input-number`]: {
        color: '$$errorColor !important',
      },
      [`& + .${prefixAntdCls}-input-number-group-addon`]: {
        borderColor: '$$errorColor !important',
        color: '$$errorColor !important',
        backgroundColor: '$white',
      },
    },
  [`.${prefixAntdCls}-input-number-affix-wrapper-disabled`]: {
    [`&, & + .${prefixAntdCls}-input-number-group-addon`]: {
      borderColor: '$stroke1 !important',
      color: 'rgba(0, 0, 0, 0.25)',
    },
  },
  [`.${prefixAntdCls}-input-number-disabled`]: {
    color: 'rgba(0, 0, 0, 0.25)',
  },
  variants: {
    variant: {
      white: {
        [`&.${prefixAntdCls}-input-number`]: {
          background: '$bg1f9',
        },
      },
      // @ts-ignore-start
      default: {
        [`&.${prefixAntdCls}-input-number`]: {
          background: '$bg1f9',
          [`&:focus, &.${prefixAntdCls}-input-number-focused`]: {
            [`&, & + .${prefixAntdCls}-input-number-group-addon`]: {
              background: '$white',
            },
          },

          [`& input`]: {
            fontWeight: 600,
          },
        },
        [`& .${prefixAntdCls}-input-number-affix-wrapper-focused`]: {
          [`&, & + .${prefixAntdCls}-input-number-group-addon`]: {
            background: '$white',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
export type StyledAntdInputNumberProps = InputNumberProps & {
  variant?: 'default' | 'white';
};
