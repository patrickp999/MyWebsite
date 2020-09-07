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
        <About data={data.about.nodes} image={data.avatar} />
        <Jobs data={data.jobs.nodes} />
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
    about: allContentfulAbout {
      nodes {
        avatar {
          fluid {
            ...GatsbyContentfulFluid
          }
          title
          description
        }
        title
        skills
        description: childContentfulAboutDescriptionRichTextNode {
          json
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
    jobs: allContentfulJob {
      nodes {
        company
        date
        dateRange
        title
        url {
          json
          url
        }
        location
        description {
          json
        }
      }
    }
  }
`;
