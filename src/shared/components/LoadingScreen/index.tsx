import React, { memo } from 'react';
import { LoadingWrapper } from './styles';

export const LoadingScreen = memo(() => {
  return (
    <LoadingWrapper>
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoadingWrapper>
  );
});
