import { KeyboardDatePicker } from '@material-ui/pickers';
//
import { styled } from '@/shared/styles';

export const StyledKeyboardDatePicker = styled(KeyboardDatePicker, {
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
