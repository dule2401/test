import { Steps as AntdSteps, StepsProps } from 'antd';
import { styled } from '@/shared/styles';
import { prefixAntdCls } from '../config';

// @ts-ignore-start
export const StyledAntdSteps = styled(AntdSteps, {
  '& *': {
    fontFamily: 'Inter, sans-serif',
  },

  [`& .${prefixAntdCls}-steps-item .${prefixAntdCls}-steps-item-icon`]: {
    width: '24px',
    height: '24px',
    marginRight: '$space$2',

    '& span': {
      fontSize: '14px',
      fontWeight: '500',
      width: '100%',
      height: '100%',
      centerBlockContent: null,
    },
  },

  variants: {
    variant: {
      custom: {
        [`& .${prefixAntdCls}-steps-item-process > .${prefixAntdCls}-steps-item-container`]: {
          [`& > .${prefixAntdCls}-steps-item-icon`]: {
            backgroundColor: '$colors$black111',
            borderColor: '$colors$black111',
          },
          [`& > .${prefixAntdCls}-steps-item-content > .${prefixAntdCls}-steps-item-title`]: {
            color: '$colors$black111',
            '&::after': {
              background: '$colors$light999',
            },
          },
        },

        [`& .${prefixAntdCls}-steps-item-wait > .${prefixAntdCls}-steps-item-container`]: {
          [`& .${prefixAntdCls}-steps-item-icon`]: {
            borderColor: '#EEEEEE',
          },
          [`& .${prefixAntdCls}-steps-item-icon > .${prefixAntdCls}-steps-icon`]: {
            color: '$colors$light999',
          },
          [`& > .${prefixAntdCls}-steps-item-content > .${prefixAntdCls}-steps-item-title`]: {
            color: '$colors$light999',
            '&::after': {
              background: '$colors$light999',
            },
          },
        },

        [`& .${prefixAntdCls}-steps-item-finish`]: {
          [`.${prefixAntdCls}-steps-item-icon`]: {
            backgroundColor: '$colors$blueMB',
            borderColor: '$colors$blueMB',
            [`.${prefixAntdCls}-steps-icon`]: {
              color: '$colors$white',
            },
          },

          [`.${prefixAntdCls}-steps-item-container > .${prefixAntdCls}-steps-item-content > .${prefixAntdCls}-steps-item-title`]:
            {
              color: '$colors$gray76',
              '&::after': {
                background: '$colors$light999',
              },
            },
        },

        [`& .${prefixAntdCls}-steps-item-content > .${prefixAntdCls}-steps-item-title`]: {
          fontSize: '15px',
          fontWeight: 400,
          lineHeight: '20px',
          '&::after': {
            background: '$colors$light999',
          },
        },

        [`&.${prefixAntdCls}-steps-horizontal`]: {
          [`& .${prefixAntdCls}-steps-item-content > .${prefixAntdCls}-steps-item-title`]: {
            marginTop: '2px', //? = (icon_height - lineHeight) / 2
            paddingRight: '$space$6',

            '&::after': {
              top: '10px',
            },
          },
          [`&:not(.${prefixAntdCls}-steps-label-vertical) .${prefixAntdCls}-steps-item:not(:first-child)`]:
            {
              paddingLeft: '$space$6 !important',
            },
        },
      },
      fill: {
        [`&`]: {
          $$finishBg: '$colors$bg2E8',
          $$borderRadius: '$space$1',
          $$iconSize: '$space$6',
          $$borderColor: '$colors$stroke1',
          $$itemTitleColor: '$colors$gray76',
          $$iconColor: '$colors$gray76',

          [`&.${prefixAntdCls}-steps-vertical .${prefixAntdCls}-steps-item .${prefixAntdCls}-steps-item-container`]:
            {
              border: '1px solid $$borderColor',
            },

          [`& .${prefixAntdCls}-steps-item`]: {
            overflow: 'initial',
            // general
            [`& .${prefixAntdCls}-steps-item-container`]: {
              borderRadius: '$$borderRadius',
              padding: '$2',
              height: '40px',
              display: 'flex',
              alignItems: 'center',

              [`& .${prefixAntdCls}-steps-item-tail:after`]: {
                display: 'none !important',
              },

              [`& > .${prefixAntdCls}-steps-item-icon`]: {
                backgroundColor: 'transparent',
                border: '1px solid',
                borderColor: '$$borderColor',
                width: '24px !important',
                height: '24px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                [`& .${prefixAntdCls}-steps-icon`]: {
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '$$iconColor !important',
                },
              },
              [`& > .${prefixAntdCls}-steps-item-content`]: {
                [`& > .${prefixAntdCls}-steps-item-title`]: {
                  color: '$$itemTitleColor !important',
                  fontSize: '14px',
                  lineHeight: '$space$5',
                  paddingRight: '0',
                  ['&:after']: {
                    display: 'none !important',
                  },
                },
              },
            },

            [`&:not(.${prefixAntdCls}-steps-item-active):not(.${prefixAntdCls}-steps-item-finish):not(.${prefixAntdCls}-steps-item-disabled)`]:
              {
                [`& .${prefixAntdCls}-steps-item-container`]: {
                  [`&:hover`]: {
                    $$borderColor: '$colors$blueMB',
                    [`& > .${prefixAntdCls}-steps-item-icon`]: {
                      $$borderColor: '$colors$blueMB',

                      [`& .${prefixAntdCls}-steps-icon`]: {
                        $$iconColor: '$colors$blueMB',
                      },
                    },

                    [`& .${prefixAntdCls}-steps-item-title`]: {
                      $$itemTitleColor: '$colors$blueMB',
                    },
                  },
                },
              },

            [`&:not(.${prefixAntdCls}-steps-item-disabled)`]: {
              // active tab
              [`&.${prefixAntdCls}-steps-item-active`]: {
                [`&::before`]: {
                  display: 'none',
                },

                [`& .${prefixAntdCls}-steps-item-container`]: {
                  [`& > .${prefixAntdCls}-steps-item-content`]: {
                    [`& > .${prefixAntdCls}-steps-item-title`]: {
                      fontWeight: '600',
                    },
                  },
                },
              },

              // status="finish"
              [`&.${prefixAntdCls}-steps-item-finish`]: {
                [`& .${prefixAntdCls}-steps-item-container`]: {
                  backgroundColor: '$$finishBg',

                  [`& > .${prefixAntdCls}-steps-item-icon`]: {
                    $$borderColor: '$colors$blueMB',
                    borderColor: '$$borderColor',
                    backgroundColor: '$colors$blueMB',

                    [`& .${prefixAntdCls}-steps-icon`]: {
                      $$iconColor: '$colors$white',
                    },
                  },

                  [`& > .${prefixAntdCls}-steps-item-content`]: {
                    [`& > .${prefixAntdCls}-steps-item-title`]: {
                      $$itemTitleColor: '$colors$blueMB',
                      fontWeight: '600',
                    },
                  },
                },
              },

              // status="process"
              [`&.${prefixAntdCls}-steps-item-process`]: {
                [`& .${prefixAntdCls}-steps-item-container`]: {
                  $$borderColor: '$colors$blueMB',
                  border: '1px solid $$borderColor',

                  [`& > .${prefixAntdCls}-steps-item-icon`]: {
                    backgroundColor: 'transparent',
                    borderColor: '$$borderColor',
                    [`& .${prefixAntdCls}-steps-icon`]: {
                      $$iconColor: '$colors$blueMB',
                    },
                  },
                  [`& > .${prefixAntdCls}-steps-item-content`]: {
                    [`& > .${prefixAntdCls}-steps-item-title`]: {
                      $$itemTitleColor: '$colors$blueMB',
                      fontWeight: '600',
                    },
                  },
                },
              },

              // status="wait"
              [`&.${prefixAntdCls}-steps-item-wait`]: {
                [`& .${prefixAntdCls}-steps-item-container`]: {
                  [`& > .${prefixAntdCls}-steps-item-icon`]: {
                    backgroundColor: 'transparent',
                    $$borderColor: '$colors$gray76',

                    [`& .${prefixAntdCls}-steps-icon`]: {
                      $$iconColor: '$colors$gray76',
                    },
                  },
                  [`& > .${prefixAntdCls}-steps-item-content`]: {
                    [`& > .${prefixAntdCls}-steps-item-title`]: {
                      $$itemTitleColor: '$colors$gray76',
                    },
                  },
                },
              },
            },

            // Disabled
            [`&.${prefixAntdCls}-steps-item-disabled .${prefixAntdCls}-steps-item-container`]: {
              opacity: '0.5',
              $$borderColor: '$colors$gray76',
              $$itemTitleColor: '$colors$gray76',
              $$iconColor: '$colors$gray76',
            },
          },
        },
      },
    },
  },
  defaultVariants: { variant: 'custom' },
}) as typeof AntdSteps;

export type StyledStepsProps = StepsProps & {
  variant?: 'fill' | 'custom';
};
