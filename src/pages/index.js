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
        <Hero data={data.hero.nodes} />
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
    hero: allContentfulHero {
      nodes {
        greeting
        blurb
        name
        subtitle
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
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
