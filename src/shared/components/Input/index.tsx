import { StyledAntdInput, StyledAntdInputProps } from '@/shared/theme/overrides/Input';
import { useState, FocusEvent, forwardRef } from 'react';

export type InputProps = StyledAntdInputProps & {
  onBlurWithOldValue?(e: FocusEvent<HTMLInputElement>, oldValue: string): void;
};
export const Input = forwardRef<any, InputProps>(
  ({ size = 'small', onBlurWithOldValue, ...props }, ref) => {
    const [oldValue, setOldValue] = useState<string>('');

    return (
      <StyledAntdInput
        {...props}
        ref={ref}
        size={size}
        onFocus={(e) => {
          if (!!onBlurWithOldValue) {
            setOldValue(e.target.value);
          }
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          onBlurWithOldValue?.(e, oldValue);
          props.onBlur?.(e);
        }}
      />
    );
  },
);
