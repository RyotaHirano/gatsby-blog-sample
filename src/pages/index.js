import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Header from '../components/Header';

export default ({ data }) => {
  return (
    <div>
      <Header title="Gatsby Blog" />
      <div
        css={css`
          width: 600px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0 auto;
          padding-top: 40px;
        `}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            key={node.id}
            css={css`
              width: 100%;
              & + & {
                margin-top: 40px;
              }
            `}>
            <h2
              css={css`
                margin: 0;
              `}>
              {node.frontmatter.title}
            </h2>
            <span>{node.frontmatter.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
