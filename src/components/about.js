import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { srConfig } from "@config";
import sr from "@utils/sr";
import { Section, Heading } from "../styles";

const AboutContainer = styled(Section)`
  position: relative;
`;

// const ContentContainer = styled.div`
//   width: 60%;
//   max-width: 480px;
//   // ${media.tablet`width: 100%;`};
//   // TODO add the transition anomation for inline link
//   // a {
//   //   ${mixins.inlineLink};
//   // }
// `;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, avetar, skills } = frontmatter;
  const revealContainer = useRef(null);

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <AboutContainer id='about' ref={revealContainer}>
      <Heading>{title}</Heading>
    </AboutContainer>
  );
};

About.prototype = {
  data: PropTypes.array.isRequired,
};

export default About;
