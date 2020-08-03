import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { theme, mixins, media, Section } from "@styles";
const { colors, myColors, fontSizes, fonts } = theme;

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin-top: 20px;
  margin: 0;
  color: ${myColors.orangeJulius};
  text-align: center;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Horizontel = styled.hr`
  position: relative;
  border: none;
  height: 1px;
  background: ${myColors.rubyRed};
  margin-top: 0px;
  margin-bottom: 10px;
  width: 65%;
  ${media.desktop`width: 403px;`};
  ${media.tablet`width: 345px;`};
  ${media.phablet`width: 288px;`};
  ${media.phone`width: 230px;`};
`;
const Subtitle = styled.h3`
  font-size: 70px;
  line-height: 1.1;
  text-align: center;
  color: ${myColors.skyScraper};
  ${media.desktop`font-size: 60px;`};
  ${media.tablet`font-size: 50px;`};
  ${media.phablet`font-size: 40px;`};
  ${media.phone`font-size: 30px;`};
`;
const Blurb = styled.div`
  margin: auto;
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  const { frontmatter, html } = data[0].node;

  const two = () => (
    <Name style={{ transitionDelay: "100ms" }}>{frontmatter.name}</Name>
  );
  const three = () => <Horizontel style={{ transitionDelay: "150ms" }} />;
  const four = () => (
    <Subtitle style={{ transitionDelay: "200ms" }}>
      {frontmatter.subtitle}
    </Subtitle>
  );
  const five = () => (
    <Blurb
      style={{ transitionDelay: "300ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );

  const items = [two, three, four, five];

  return (
    <HeroContainer id='hero'>
      <TransitionGroup>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames='fade' timeout={3000}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </HeroContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
