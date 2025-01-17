// import { ReactNode, useState, ComponentType, SVGProps } from 'react';
// import { Space } from 'antd';
// import Icon from '@ant-design/icons';
// import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
// //
// import { StyledHeading, Wrapper, HeadingWrapper, ContentWrapper } from './styles';
// import { useTheme } from '@/shared/hooks/useTheme';
// import { ChevronDown } from '@/shared/assets/icons/ChevronDown';
// import { styled, css } from '@/shared/styles';
// import { Radio } from '../Radio';

// type HeadingProps = {
//   icon?: ComponentType<CustomIconComponentProps | SVGProps<SVGSVGElement>>;
//   title: string | ReactNode;
//   isExpanded: boolean;
//   onClick: VoidFunction;
//   variant?: 'box' | 'radio';
//   expandIcon?: (isExpanded: boolean) => ReactNode;
// };

// type CollapseBoxProps = Pick<HeadingProps, 'icon' | 'title'> & {
//   children: ReactNode;
// };

// const HeadingIcon = styled(Icon, {
//   '& svg': {
//     margin: 'auto',
//   },
// });

// // @ts-ignore-start
// const PrefixIconWrapper = styled('span', {
//   maxHeight: '28px',
//   fontSize: '16px',
//   color: '$blueMB',

//   [`${HeadingIcon}`]: {
//     display: 'inline-flex',
//     width: '28px',
//     height: '28px',

//     background: '$white',
//     borderRadius: '50%',
//   },
// });

// const Heading = ({ icon, title, isExpanded, onClick, variant, expandIcon }: HeadingProps) => {
//   const { theme } = useTheme();

//   return (
//     <HeadingWrapper onClick={onClick}>
//       <StyledHeading variant={variant} className={isExpanded ? 'active' : ''}>
//         <Space
//           align="center"
//           className={css({
//             gap: `${theme.space[3].value} !important`,
//             '& > *': {
//               display: 'flex',
//             },
//           })()}
//         >
//           {icon && (
//             <PrefixIconWrapper>
//               <HeadingIcon component={icon} />
//             </PrefixIconWrapper>
//           )}
//           <h1 className="title">{title}</h1>
//         </Space>
//         <div style={{ cursor: 'pointer', zIndex: '10' }}>
//           {expandIcon ? (
//             expandIcon(isExpanded)
//           ) : (
//             <Icon
//               component={() => <ChevronDown />}
//               style={{
//                 transition: 'all 0.35s ease-in-out',
//                 transform: isExpanded ? 'rotate(180deg)' : 'none',
//               }}
//             />
//           )}
//         </div>
//       </StyledHeading>
//     </HeadingWrapper>
//   );
// };

// export const CollapseBox = ({ icon, title, children }: CollapseBoxProps) => {
//   const [isExpanded, setExpanded] = useState(true);

//   const toggleExpanding = () => setExpanded((current) => !current);

//   return (
//     <Wrapper>
//       <Heading
//         icon={icon}
//         title={title}
//         onClick={toggleExpanding}
//         isExpanded={isExpanded}
//         variant="box"
//       />
//       <ContentWrapper expanded={isExpanded}>{children}</ContentWrapper>
//     </Wrapper>
//   );
// };

// type CollapseRadioProps = Pick<HeadingProps, 'icon' | 'title'> & {
//   children: ReactNode;
//   control?: {
//     expanded: boolean;
//     onExpand?(): void;
//   };
//   disabled?: boolean;
// };

// export const CollapseRadio = ({ icon, title, children, control, disabled }: CollapseRadioProps) => {
//   const [_isExpanded, setExpanded] = useState(false);

//   const isExpanded = control?.expanded !== undefined ? control?.expanded : _isExpanded;

//   const toggleExpanding = () => {
//     if (disabled) return;
//     control?.onExpand?.();
//     setExpanded((current) => !current);
//   };

//   return (
//     <Wrapper>
//       <div
//         className={css({
//           mx: '-$2',
//           my: '-$2',
//           '&': {
//             opacity: disabled ? '.5' : undefined,
//           },
//           '& *': {
//             cursor: disabled ? 'not-allowed !important' : undefined,
//           },
//         })()}
//       >
//         <Heading
//           title={
//             <div className={css({ display: 'flex', gap: '$2' })()}>
//               {icon && (
//                 <Icon
//                   className={css({
//                     '& svg': {
//                       width: '20px',
//                       height: '20px',
//                     },
//                   })()}
//                   component={icon}
//                 />
//               )}
//               {title}
//             </div>
//           }
//           onClick={toggleExpanding}
//           isExpanded={isExpanded}
//           variant="radio"
//           expandIcon={(isExpanded) => (
//             <Radio disabled={disabled} checked={isExpanded} style={{ margin: 0 }} />
//           )}
//         />
//       </div>
//       {children && <ContentWrapper expanded={isExpanded}>{children}</ContentWrapper>}
//     </Wrapper>
//   );
// };
