import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
// import { srConfig } from "@config";
// import sr from "@utils/sr";
import { Section, Heading, mixins, media, theme } from "@styles";
const { colors, myColors, fontSizes, fonts } = theme;

const AboutContainer = styled(Section)`
  position: relative;
  max-width: 700px;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${colors.slate};
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${myColors.sage};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`;
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;
const Avatar = styled(Img)`
  position: relative;
  // mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, avatar, skills } = frontmatter;
  const revealContainer = useRef(null);

  // useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <AboutContainer id='about' ref={revealContainer}>
      <Heading>{title}</Heading>
      <FlexContainer>
        <ContentContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </ContentContainer>
        <PicContainer>
          <Avatar fluid={avatar.childImageSharp.fluid} alt='Avatar' />
        </PicContainer>
      </FlexContainer>
    </AboutContainer>
  );
};

About.prototype = {
  data: PropTypes.array.isRequired,
};

export default About;
