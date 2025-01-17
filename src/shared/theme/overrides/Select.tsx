import { ComponentProps } from 'react';
import { Select as AntdSelect } from 'antd';
//
import { styled } from '@/shared/styles';
import { prefixAntdCls } from '../config';

// @ts-ignore-start
export const StyledAntdSelect = styled(AntdSelect, {
  $$borderColor: '$colors$stroke2',
  $$secBorderColor: '$colors$blueMB',
  $$height: '56px',
  $$fontSize: '16px',
  $$iconFontSize: '16px',
  $$iconHeight: '9px',
  $$leftSearchBox: '$space$4',
  $$rightSearchBox: '$space$5',
  $$errorColor: '$colors$error1',

  fontSize: '$$fontSize !important',
  height: '$$height',

  [`&.${prefixAntdCls}-select-focused`]: {
    boxShadow: 'none !important',

    [`.${prefixAntdCls}-select-selector`]: {
      boxShadow: 'none !important',
      borderColor: '$$secBorderColor !important',
    },
  },

  '*': {
    fontWeight: '600 !important',
  },

  [`&:not(.${prefixAntdCls}-select-disabled)`]: {
    [`.${prefixAntdCls}-select-selection-placeholder`]: {
      color: '$gray76',
    },
    [`&:hover .${prefixAntdCls}-select-selector`]: {
      borderColor: '$$secBorderColor !important',
      color: '$black111',
    },

    [`&:not(.${prefixAntdCls}-select-customize-input).${prefixAntdCls}-select-status-error > div.${prefixAntdCls}-select-selector`]:
      {
        borderColor: '$$errorColor !important',
      },
  },

  [`&.${prefixAntdCls}-select-lg`]: {
    $$height: '64px',
  },

  [`&.${prefixAntdCls}-select-sm`]: {
    $$height: '48px',
    $$iconFontSize: '13.33px',
  },

  [`&:not(.${prefixAntdCls}-select-customize-input) .${prefixAntdCls}-select-selector`]: {
    height: '$$height !important',
    paddingLeft: '$$leftSearchBox !important',
    borderColor: '$$borderColor !important',

    [`.${prefixAntdCls}-select-selection-item`]: {
      lineHeight: '$$height !important',
    },
  },

  [`&.${prefixAntdCls}-select-single:not(.${prefixAntdCls}-select-customize-input) .${prefixAntdCls}-select-selector .${prefixAntdCls}-select-selection-search-input`]:
    {
      height: '100% !important',
    },

  [`&.${prefixAntdCls}-select-single .${prefixAntdCls}-select-selector .${prefixAntdCls}-select-selection-search`]:
    {
      left: '$$leftSearchBox !important',
      right: 'calc($$rightSearchBox + $$iconFontSize)',
    },

  [`.${prefixAntdCls}-select-arrow`]: {
    fontSize: '$$iconFontSize',
    height: '$$iconHeight',
    right: '$space$5',
    marginTop: '-3px',

    pointerEvents: 'none',

    [`& .anticon:not(.${prefixAntdCls}-select-suffix)`]: {
      pointerEvents: 'unset',
    },
  },

  variants: {
    status: {
      error: {
        '&': {
          $$borderColor: '$$errorColor',
          $$secBorderColor: '$$errorColor',
          [`&:hover .${prefixAntdCls}-select-selector`]: {
            borderColor: '$$borderColor !important',
          },
        },
      },
    },
    sz: {
      large: {},
      middle: {},
      small: {},
      xsmall: {
        '&': {
          $$height: '36px',
          $$fontSize: '14px',
          $$iconFontSize: '13.33px',
          $$iconHeight: '7.5px',
          $$leftSearchBox: '$space$3',
          [`.${prefixAntdCls}-select-selection-placeholder`]: {
            lineHeight: '33px !important',
          },
        },
      },
    },
    type: {
      outline: {},
      container: {
        [`&:not(.${prefixAntdCls}-select-customize-input) .${prefixAntdCls}-select-selector`]: {
          borderColor: '$stroke1 !important',
          backgroundColor: '$bg1f9 !important',
        },
      },
    },
    borderless: {
      true: {
        '&': {
          $$borderColor: 'transparent',
          $$secBorderColor: 'transparent',
          $$leftSearchBox: '0',

          [`&:hover`]: {
            $$borderColor: 'transparent',
            $$secBorderColor: 'transparent',
          },
        },
      },
    },
  },

  defaultVariants: {
    sz: 'middle',
    type: 'outline',
  },
});

export type StyledAntdSelectProps = Omit<ComponentProps<typeof AntdSelect>, 'size' | 'status'> & {
  status?: 'error';
  sz?: 'large' | 'middle' | 'small' | 'xsmall';
  type?: 'outline' | 'container';
  borderless?: boolean;
};
