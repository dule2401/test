import { Link as ReactLink, LinkProps } from 'react-router-dom';
//
import { HOST_ID_STATE } from '@/config';

export const HostLink = (props: LinkProps) => (
  <Link
    {...props}
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    state={{
      ...props.state,
      ...HOST_ID_STATE,
    }}
  />
);

export const Link = ReactLink;
