import { styled, keyframes } from '@/shared/styles';

const spinnerFade = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const LoadingWrapper = styled('div', {
  width: '100%',
  minHeight: '100vh',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 999,
  backgroundColor: '$colors$white',
  opacity: 0.6,
  transition: '250ms',
  centerBlockContent: '',
  '& .lds-spinner': {
    display: 'inline-block',
    position: 'relative',
    width: '64px',
    height: '64px',
    '& div': {
      transformOrigin: '32px 32px',
      animation: `${spinnerFade} 1.2s linear infinite`,

      '&::after': {
        content: ' ',
        display: 'block',
        position: 'absolute',
        top: '3px',
        left: '29px',
        width: '5px',
        height: '14px',
        borderRadius: '20%',
        backgroundColor: '#349ad0',
      },

      '&:nth-child(1)': {
        transform: 'rotate(0deg)',
        animationDelay: '-1.1s',
      },

      '&:nth-child(2)': {
        transform: 'rotate(30deg)',
        animationDelay: '-1.0s',
      },

      '&:nth-child(3)': {
        transform: 'rotate(60deg)',
        animationDelay: '-.9s',
      },

      '&:nth-child(4)': {
        transform: 'rotate(90deg)',
        animationDelay: '-.8s',
      },

      '&:nth-child(5)': {
        transform: 'rotate(120deg)',
        animationDelay: '-.7s',
      },

      '&:nth-child(6)': {
        transform: 'rotate(150deg)',
        animationDelay: '-.6s',
      },
      '&:nth-child(7)': {
        transform: 'rotate(180deg)',
        animationDelay: '-.5s',
      },

      '&:nth-child(8)': {
        transform: 'rotate(210deg)',
        animationDelay: '-.4s',
      },
      '&:nth-child(9)': {
        transform: 'rotate(240deg)',
        animationDelay: '-.3s',
      },

      '&:nth-child(10)': {
        transform: 'rotate(270deg)',
        animationDelay: '-.2s',
      },
      '&:nth-child(11)': {
        transform: 'rotate(300deg)',
        animationDelay: '-.1s',
      },

      '&:nth-child(12)': {
        transform: 'rotate(330deg)',
        animationDelay: '-.0s',
      },
    },
  },
});
