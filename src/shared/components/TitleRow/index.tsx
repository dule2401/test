// import React from 'react';
// import { Col, Row, RowProps } from 'antd';
// //
// import { Title } from '../Title';
// import { Info } from '@/shared/assets/icons';
// import { css } from '@/shared/styles';
// import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

// export type TitleRowProps = {
//   title: string;
//   icon?:
//     | null
//     | React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>
//     | React.ForwardRefExoticComponent<CustomIconComponentProps>;
// } & RowProps;

// export const TitleRow = ({ title, icon = Info, ...props }: TitleRowProps) => {
//   return (
//     <Row
//       {...props}
//       className={css({
//         paddingBottom: '10px',
//         paddingLeft: '$6',
//         paddingRight: '$6',
//         borderBottom: '1px solid $stroke1',
//         alignItems: 'center',
//       })()}
//     >
//       <Col span={24}>
//         <Title icon={icon || undefined}>{title}</Title>
//       </Col>
//     </Row>
//   );
// };
