import React, { useState, useRef, useEffect } from "react";
import sr from "@utils/sr";
import { srConfig } from "@config";
import styled from "styled-components";
import { theme, mixins, media, Section, Heading } from "@styles";
const { colors, myColors, fontSizes, fonts } = theme;

const HeadingOpposite = styled.h3`
  position: relative;
  color: ${myColors.skyScraper}
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};

  &:before {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: ${myColors.orangeJulius};
    position: relative;
    top: -5px;
    margin-right: 20px;
    ${media.desktop`width: 200px`};
    ${media.tablet`width: 100%;`};
    ${media.phone`margin-left: 10px;`};
  }
`;
const JobsContainer = styled(Section)`
  position: relative;
  max-width: 700px;
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${media.phone`
    display: block;
  `};
`;
const Tabs = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  ${media.phone`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  `};
  ${media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
  `};

  li {
    &:first-of-type {
      ${media.phone`
        margin-left: 50px;
      `};
      ${media.phablet`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${media.phone`
        padding-right: 50px;
      `};
      ${media.phablet`
        padding-right: 25px;
      `};
    }
  }
`;
const Tab = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-left: 2px solid ${colors.darkGrey};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${(props) => (props.isActive ? colors.green : colors.lightGrey)};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.phone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors.darkGrey};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: ${colors.lightNavy};
  }
`;
const Highlighter = styled.span`
  display: block;
  background: ${colors.green};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${(props) =>
      props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0}px
  );
  ${media.phone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${(props) =>
        props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0}px
    );
    margin-left: 50px;
  `};
  ${media.phablet`
    margin-left: 25px;
  `};
`;
const ContentContainer = styled.div`
  position: relative;
  padding-top: 12px;
  padding-left: 30px;
  flex-grow: 1;
  ${media.tablet`padding-left: 20px;`};
  ${media.phone`padding-left: 0;`};
`;
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  z-index: ${(props) => (props.isActive ? 2 : -1)};
  position: ${(props) => (props.isActive ? "relative" : "absolute")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transition: ${theme.transition};
  transition-duration: ${(props) => (props.isActive ? "0.5s" : "0s")};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.large};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${colors.green};
        line-height: ${fontSizes.xlarge};
      }
    }
  }
  a {
    ${mixins.inlineLink};
  }
`;
const JobTitle = styled.h4`
  color: ${colors.lightestSlate};
  font-size: ${fontSizes.xxlarge};
  font-weight: 500;
  margin-bottom: 5px;
`;
const Company = styled.span`
  color: ${colors.green};
`;
const JobDetails = styled.h5`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  letter-spacing: 0.5px;
  color: ${colors.lightSlate};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;

const jobs = ({ data }) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const revealContainer = useRef(null);

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <JobsContainer id='jobs' ref={revealContainer}>
      <HeadingOpposite>Where I&apos;ve Worked</HeadingOpposite>
      <TabsContainer>
        <Tabs role='tablist'>
          {data &&
            data.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <li key={i}>
                  <Tab
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    role='tab'
                    aria-selected={activeTabId === i ? "true" : "false"}
                    aria-controls={`tab${i}`}
                    id={`tab${i}`}
                    tabIndex={activeTabId === i ? "0" : "-1"}
                  >
                    <span>{company}</span>
                  </Tab>
                </li>
              );
            })}
          <Highlighter activeTabId={activeTabId} />
        </Tabs>
        <ContentContainer>
          {data &&
            data.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { title, url, company, range } = frontmatter;
              return (
                <TabContent
                  key={i}
                  isActive={activeTabId === i}
                  id={`job${i}`}
                  role='tabpanel'
                  tabIndex='0'
                  aria-labelledby={`job${i}`}
                  aria-hidden={activeTabId !== i}
                >
                  <JobTitle>
                    <span>{title}</span>
                    <Company>
                      <span>&nbsp;@&nbsp;</span>
                      <a
                        href={url}
                        target='_blank'
                        rel='nofollow noopener noreferrer'
                      >
                        {company}
                      </a>
                    </Company>
                  </JobTitle>
                  <JobDetails>
                    <span>{range}</span>
                  </JobDetails>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </TabContent>
              );
            })}
        </ContentContainer>
      </TabsContainer>
    </JobsContainer>
  );
};

export default jobs;
