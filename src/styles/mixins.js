import { css } from "styled-components";
import theme from "./Theme";
import media from "./Media";
const { colors, myColors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${myColors.sage};
      outline: 0;
    }
  `,
  activeBorder: css`
    border-left: 2px solid ${myColors.sage};
  `,
  borderNone: css`
    border-left: none;
  `,
  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${myColors.sage};
    &:hover,
    &:focus,
    &:active {
      color: ${myColors.sage};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${myColors.orangeJulius};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${myColors.sage};
    background-color: transparent;
    border: 1px solid ${myColors.sage};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smallish};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    outline: none;
    &:hover,
    &:focus,
    &:active {
      color: ${myColors.sage}
      border-color: ${myColors.sage}
      background-color: ${myColors.transparentSage};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${myColors.sage};
    background-color: transparent;
    border: 1px solid ${myColors.sage};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.small};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    outline: none;
    &:hover,
    &:focus,
    &:active {
      color: ${myColors.sage}
      border-color: ${myColors.sage}
      background-color: ${myColors.transparentSage};
    }
    &:after {
      display: none !important;
    }
  `,
};

export default mixins;
