import { Radio as AntdRadio, RadioProps } from 'antd';
import { styled } from '@/shared/styles';
import { prefixAntdCls } from '../config';

// @ts-ignore-start
export const StyledAntdRadio = styled(AntdRadio, {
  [`& .${prefixAntdCls}-radio.${prefixAntdCls}-radio-disabled `]: {
    [`& + span`]: {
      color: '$gray76',
    },
  },

  [`& .${prefixAntdCls}-radio .${prefixAntdCls}-radio-inner`]: {
    width: '20px',
    height: '20px',
    borderWidth: '2px',
    borderColor: '$gray76',

    '&::after': {
      width: '24px',
      height: '24px',
      marginTop: '-12px',
      marginLeft: '-12px',
      background: '$colors$blueMB',
    },
  },
  [`& .${prefixAntdCls}-radio + span`]: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    lineHeight: '22px',
    paddingLeft: '$space$2',
    alignSelf: 'center',
    color: '$black111',
  },

  [`.${prefixAntdCls}-radio:not(.${prefixAntdCls}-radio-disabled)`]: {
    [`&:hover .${prefixAntdCls}-radio-inner`]: {
      borderColor: '$colors$blueMB',

      '&:hover': {
        borderColor: '$colors$blueMB !important',
      },
    },
  },

  [`& .${prefixAntdCls}-radio-checked + span`]: {
    color: '$colors$blueMB',
  },
  [`& .${prefixAntdCls}-radio.${prefixAntdCls}-radio-checked .${prefixAntdCls}-radio-inner`]: {
    borderColor: '$colors$blueMB',
  },

  [`.${prefixAntdCls}-radio-input:focus + .${prefixAntdCls}-radio-inner`]: {
    borderColor: '$colors$blueMB',
    boxShadow: 'none',
  },
  variants: {
    variant: {
      default: {},
      rect: {
        '&': {
          alignItems: 'center !important',
          background: '$bg1f9',
          color: '$black111',
          border: '1px solid $stroke1',
          py: '$space$2',
          borderRadius: '$space$1',
          fontWeight: '600',
          height: '36px',
          width: '100%',

          '& span': {
            width: '100%',
          },

          [`& .${prefixAntdCls}-radio`]: {
            display: 'none',
          },
          [`&.${prefixAntdCls}-radio-wrapper-disabled`]: {
            opacity: 0.7,
          },

          [`&.${prefixAntdCls}-radio-wrapper-checked`]: {
            background: '$pinkMB',
            '& span': {
              color: '$white !important',
            },
          },
        },
      },
      borderred: {
        '&': {
          background: '$bg1f9',
          padding: '$1 $2 !important',
          borderRadius: '$space$1 !important',
          border: '1px solid $stroke1',
          [`& .${prefixAntdCls}-radio + span`]: {
            fontWeight: '600',
          },
        },
      },
    },
    direction: {
      reverse: {
        flexDirection: 'row-reverse',
      },
    },
    labelPosition: {
      right: {},
      top: {
        [`&.${prefixAntdCls}-radio-wrapper`]: {
          display: 'inline-flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
          '&::after': {
            content: '',
            display: 'none',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    labelPosition: 'right',
  },
}) as typeof AntdRadio;

export type StyledAntdRadioProps = RadioProps & {
  variant?: 'default' | 'rect' | 'borderred';
  direction?: 'reverse';
  labelPosition?: 'right' | 'top';
};
