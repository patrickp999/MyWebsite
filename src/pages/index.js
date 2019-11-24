import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Contact } from '@components';
import { Main } from '@styles';

const MainContainer = styled(Main)``;

const IndexPage = ({ data }) => (
  <Layout>
    <MainContainer id="content">
      <Hero />
      <About />
      <Jobs />
      <Contact />
    </MainContainer>
  </Layout>
);

export default IndexPage;
