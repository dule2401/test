import { ReactNode, ComponentProps } from 'react';
import { styled } from '@/shared/styles';
import { MAX_WIDTH } from '@/shared/theme/breakpoints';

const StyledContainer = styled('div', {
  maxWidth: MAX_WIDTH,
  mx: 'auto',
});

type StyledButtonProps = ComponentProps<typeof StyledContainer>;

export const Container = ({ children, ...props }: StyledButtonProps & { children: ReactNode }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};
