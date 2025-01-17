import { styled } from '@/shared/styles';
import { HTMLAttributes } from 'react';

const StyledSpan = styled('span', {
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: 600,
  color: '$black111',
  lineHeight: '20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left',
  variants: {
    bordered: {
      true: {
        border: '1px solid #D9D9D9',
        width: '100%',
        padding: '6px 12px',
        borderRadius: '$space$1',
        background: '$bg1f9',
      },
    },
  },
});

type Props = HTMLAttributes<HTMLSpanElement> & { bordered?: boolean };
export const FieldText = (props: Props) => <StyledSpan {...props} />;
