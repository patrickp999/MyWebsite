import React from 'react';
import { graphql } from 'gatsby';
import { object } from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Contact } from '@components';
import { Main } from '@styles';

const MainContainer = styled(Main)``;

const IndexPage = ({ data }) => (
  <Layout>
    <MainContainer id='content'>
      <Hero />
      <About data={data.about.edges} />
      <Jobs />
      <Contact />
    </MainContainer>
  </Layout>
);

IndexPage.propTypes = {
  data: object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            skills
          }
          html
        }
      }
    }
  }
`;
