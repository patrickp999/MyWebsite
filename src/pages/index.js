import React from "react";
import { graphql } from "gatsby";
import { object } from "prop-types";
import styled from "styled-components";
import { Layout, Hero, About, Jobs, Contact } from "@components";
import { mixins, Main } from "@styles";

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <MainContainer id='content'>
        <Hero data={data.hero.edges} />
        <About data={data.about.edges} />
        <Jobs data={data.jobs.edges} />
        <Contact data={data.contact.edges} />
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
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
          }
          html
        }
      }
    }
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
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
  }
`;
