import { Skeleton } from 'antd';
import { css } from '@/shared/styles';

type Props = {
  width?: string;
  height?: string;
};

export const TextSkeleton = (props: Props) => (
  <Skeleton.Input
    active
    size="small"
    className={css({
      overflow: 'hidden',
      ...props,
    })()}
  />
);
