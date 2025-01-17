import { styled } from '@/shared/styles';
import { StyledComponent } from '@stitches/react/types/styled-component';

export const Wrapper = styled('div', {
  backgroundColor: '$colors$white',
  borderRadius: '$space$1',
});

export const HeadingWrapper = styled('div', {
  padding: '$space$2',
  cursor: 'pointer',
});

export const StyledHeading = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  borderRadius: '$space$1',
  px: '$space$4',

  overflow: 'hidden',
  '& h1.title': {
    margin: '0 !important',
  },
  variants: {
    variant: {
      box: {
        backgroundColor: '$colors$blueShade',

        '&::after': {
          content: '',
          backgroundImage: "url('/images/bg_collapse_heading.svg')",
          backgroundRepeat: 'no-repeat',
          display: 'inline-block',
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '392px',
          height: '52px',
        },

        '& h1.title': {
          fontSize: '17px',
          py: '15px',
          fontWeight: 600,
          lineHeight: '22px',
          color: '$colors$white',
        },
      },
      radio: {
        border: '1px solid $stroke1',
        backgroundColor: '$white',

        '& h1.title': {
          fontSize: '14px',
          py: '10px',
          fontWeight: 600,
          lineHeight: '20px',
          color: '$black111',
        },

        '&.active': {
          backgroundColor: '$bg3E2',
          borderColor: '$blueMB',
        },
      },
    },
  },
}) as StyledComponent<'div', { variant?: 'box' | 'radio' }>;

export const ContentWrapper = styled('div', {
  marginTop: '$space$1',
  variants: {
    expanded: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
        overflow: 'hidden',
      },
    },
  },
});
