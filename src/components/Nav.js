import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const NavLi = styled.li`
  margin: 0 20px;
`;

export default () => (
  <ul
    css={css`
      display: flex;
      justify-content: center;
      list-style: none;
      margin: 0;
      padding: 0;
    `}>
    <NavLi>
      <Link to="/">Top</Link>
    </NavLi>
    <NavLi>
      <Link to="/about">About</Link>
    </NavLi>
  </ul>
);
