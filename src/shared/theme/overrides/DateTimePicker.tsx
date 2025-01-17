import { KeyboardDateTimePicker } from '@material-ui/pickers';
//
import { styled } from '@/shared/styles';

export const StyledKeyboardDateTimePicker = styled(KeyboardDateTimePicker, {
  $$primBorderColor: '$colors$blueMB',
  '.MuiInputBase-root': {
    border: '.5px solid $colors$stroke1',
    borderRadius: '$space$1',
    background: '$colors$bg1f9',
    color: '$black111',
    transition: 'all 0.3s',
    fontSize: '14px',
    '&:hover': {
      borderColor: '$$primBorderColor',
    },
    '&.Mui-disabled': {
      borderColor: '$colors$stroke1 !important',
      cursor: 'not-allowed !important',
    },
    '.Mui-disabled:hover': {
      borderColor: '$colors$stroke1 !important',
    },
    '&::after': {
      display: 'none',
    },
    '&.Mui-error': {
      color: '$colors$error1',
      borderColor: '$colors$error1 !important',
    },
    '&.Mui-focused': {
      borderColor: '$$primBorderColor',
      backgroundColor: '$white ',
    },
  },
  '& .MuiInputBase-input': {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    fontFamily: 'Inter, sans-serif',
    padding: 0,
    color: 'CurrentColor',
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
  },
  '.MuiInputBase-root::before': {
    display: 'none',
  },
  '.MuiFormHelperText-root': {
    '&.Mui-error': {
      fontSize: '12px',
      color: '$colors$error1',
    },
  },
});

export const StyledDateTimePicker = styled(StyledKeyboardDateTimePicker, {
  variants: {
    size: {
      small: {
        '.MuiInputBase-root': {
          height: '36px',
          padding: '$space$2 $space$3',
          '& .MuiButtonBase-root': {
            padding: '$space$2',
            '& svg': {
              width: '$space$4',
              height: '$space$4',
            },
          },
        },
      },
      medium: {
        '.MuiInputBase-root': {
          height: '56px',
          padding: '$space$4',
          '& .MuiButtonBase-root': {
            padding: '$space$3',
            '& svg': {
              width: '$space$5',
              height: '$space$5',
            },
          },
        },
      },
    },
    bgColor: {
      white: {
        '.MuiInputBase-root': {
          background: '$colors$white',
        },
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});
