import React from 'react';
import { graphql } from 'gatsby';
import { object } from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Contact } from '@components';
import { mixins, Main } from '@styles';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <MainContainer id='content'>
        <Hero />
        <About data={data.about.edges} />
        <Jobs />
        <Contact />
      </MainContainer>
    </Layout>
  );
};

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
