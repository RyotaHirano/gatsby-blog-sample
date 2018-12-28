import React from 'react';
import { css } from '@emotion/core';
import Nav from '../components/Nav';

export default props => (
  <div>
    <h1
      css={css`
        margin: 0;
        text-align: center;
      `}>
      {props.title}
    </h1>
    <Nav />
  </div>
);
