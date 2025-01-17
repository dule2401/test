import { Input as AntdInput, InputProps } from 'antd';
//
import { styled } from '@/shared/styles';
import { prefixAntdCls } from '../config';

// @ts-ignore-start
export const StyledAntdInput = styled(AntdInput, {
  $$bgColor: '$colors$bg1f9',
  $$placeHolderColor: '$colors$gray76',
  $$borderColor: '$colors$stroke2',
  $$textColor: '$colors$black111',
  $$primBorderColor: '$colors$blueMB',
  $$primBgColor: '$colors$blueMB',
  $$errorBorderColor: '$colors$error1',
  $$errorTextColor: '$colors$error1',
  $$readonlyColor: '$colors$black111',
  $$border: '1px solid $$borderColor',
  $$padding: '$space$4',

  [`&.${prefixAntdCls}-input, 
    &.${prefixAntdCls}-input-affix-wrapper:not(.${prefixAntdCls}-input-affix-wrapper-status-error)`]:
    {
      '&, & input': {
        backgroundColor: '$$bgColor !important',
      },
    },

  [`&.${prefixAntdCls}-input:not(:disabled)::placeholder,
    & .${prefixAntdCls}-input:not(:disabled)::placeholder`]: {
    color: '$$placeHolderColor',
  },
  [`&.${prefixAntdCls}-input, 
    &.${prefixAntdCls}-input-affix-wrapper`]: {
    padding: '$$padding',
    border: '$$border',

    [`&[disabled]`]: {
      border: '$$border',
    },
    [`&.${prefixAntdCls}-input-sm, 
      &.${prefixAntdCls}-input-affix-wrapper-sm`]: {
      $$padding: '6px $space$3',
    },
    [`&.${prefixAntdCls}-input-lg, 
      &.${prefixAntdCls}-input-affix-wrapper-lg`]: {
      $$padding: '19px $space$4',
    },
    [`&, & > .${prefixAntdCls}-input`]: {
      [`&:not(.${prefixAntdCls}-input-affix-wrapper-disabled):not(.${prefixAntdCls}-input-disabled)`]:
        {
          color: '$$textColor',
        },
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '22px',

      //Size
      [`&.${prefixAntdCls}-input-lg`]: {
        fontSize: '18px !important',
        lineHeight: '26px',
      },
    },
    [`&[readonly], 
      & > .${prefixAntdCls}-input[readonly], 
      &.${prefixAntdCls}-input-affix-wrapper-readonly`]: {
      fontWeight: 600,
      color: '$$readonlyColor !important',
      borderColor: '$stroke1 !important',
      pointerEvents: '',
    },
  },
  [`&.${prefixAntdCls}-input, &.${prefixAntdCls}-input-affix-wrapper`]: {
    boxShadow: 'none !important',
  },
  [`&.${prefixAntdCls}-input:focus,
    &.${prefixAntdCls}-input-focused,
    &.${prefixAntdCls}-input-affix-wrapper:focus,
    &.${prefixAntdCls}-input-affix-wrapper-focused`]: {
    borderColor: '$$primBorderColor',
  },
  [`&.${prefixAntdCls}-input:hover,
    &.${prefixAntdCls}-input-affix-wrapper:not(.${prefixAntdCls}-input-affix-wrapper-disabled):hover`]:
    {
      borderColor: '$$primBorderColor',
    },

  /// Error
  [`&.${prefixAntdCls}-input-affix-wrapper-status-error:not(.${prefixAntdCls}-input-affix-wrapper-disabled):not(.${prefixAntdCls}-input-affix-wrapper-borderless).${prefixAntdCls}-input-affix-wrapper,
    &.${prefixAntdCls}-input-affix-wrapper-status-error:not(.${prefixAntdCls}-input-affix-wrapper-disabled):not(.${prefixAntdCls}-input-affix-wrapper-borderless).${prefixAntdCls}-input-affix-wrapper:hover,
    &.${prefixAntdCls}-input-status-error:not(.${prefixAntdCls}-input-disabled):not(.${prefixAntdCls}-input-borderless).${prefixAntdCls}-input, 
    &.${prefixAntdCls}-input-status-error:not(.${prefixAntdCls}-input-disabled):not(.${prefixAntdCls}-input-borderless).${prefixAntdCls}-input:hover
  `]: {
    borderColor: '$$errorBoderColor !important',
    [`&, & input, & .${prefixAntdCls}-input-prefix`]: {
      color: '$$errorTextColor !important',
    },
  },
  variants: {
    variant: {
      borderless: {
        $$border: 'none !important',
        $$bgColor: '$colors$white !important',
        $$padding: '6px 0 !important',
      },
      default: {
        [`&.${prefixAntdCls}-input, 
          &.${prefixAntdCls}-input-affix-wrapper`]: {
          '&, & input': {
            fontWeight: '600 !important',
          },
        },
        [`&.${prefixAntdCls}-input:focus,
          &.${prefixAntdCls}-input-focused,
          &.${prefixAntdCls}-input-affix-wrapper:focus,
          &.${prefixAntdCls}-input-affix-wrapper-focused`]: {
          '&, & input': {
            backgroundColor: '$white !important',
          },
        },
      },
    },
    bgColor: {
      white: {
        ['&']: {
          $$bgColor: '$colors$white',
        },

        [`&.${prefixAntdCls}-input, 
          &.${prefixAntdCls}-input-affix-wrapper`]: {
          '&, & input': {
            fontWeight: '600 !important',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
export type StyledAntdInputProps = InputProps & {
  variant?: 'default' | 'borderless';
  bgColor?: 'white';
};
