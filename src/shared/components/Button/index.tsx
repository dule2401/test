//
import {
  StyledAntdButton,
  ButtonProps as StyledButtonProps,
} from '@/shared/theme/overrides/Button';

export type ButtonProps = StyledButtonProps;
export function Button(props: ButtonProps) {
  return <StyledAntdButton {...props} />;
}
