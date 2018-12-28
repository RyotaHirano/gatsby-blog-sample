import React from 'react';
import { css } from '@emotion/core';
import Header from '../components/Header';

export default () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
    `}>
    <Header title="About" />
  </div>
);
