import { Avatar, List, Skeleton } from 'antd';
import { css } from '@/shared/styles';

export const CollapseBoxSkeleton = () => (
  <div
    className={css({
      width: '100%',
      backgroundColor: '$white',
      padding: '$4',
      borderRadius: '$1',
    })()}
  >
    <Skeleton active avatar>
      <List.Item.Meta avatar={<Avatar />} />
    </Skeleton>
  </div>
);
