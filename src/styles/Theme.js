const theme = {
  colors: {
    red: "#fd4345",
    navyBlue: "#263547",
    white: "#fdfdfd",
    gray: "737373",
    black: "#000000",
    dark: "#000007",
    darkestNavy: "#01050b",
    darkNavy: "#020c1b",
    navy: "#0a192f",
    lightNavy: "#172a45",
    darkGrey: "#333f58",
    mediumGrey: "#2d3952",
    grey: "#4c5772",
    lightGrey: "#606a86",
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
    offWhite: "#dce7ff",
    pink: "#FF647F",
    yellow: "#FFC464",
    orange: "#FF9E64",
    green: "#64ffda",
    blue: "#71AFFF",
    darkBlue: "#1D7FFC",
    highlight: "rgba(41, 61, 90, 0.99)",
    transGreen: "rgba(100, 255, 218, 0.07)",
    transNavy: "rgba(10, 25, 47, 0.7)",
    shadowNavy: "rgba(2, 12, 27, 0.7)",
  },

  myColors: {
    darkGray: "#171717",
    lightGray: "#505050",
    slate: "#8892b0",
    orangeJulius: "#F84330",
    skyScraper: "#878787",
    transSkyScraper: "rgba(135, 135, 135, 0.07)",
    rubyRed: "#A33327",
    transparentRuby: "rgba(163, 51, 39, 0.07)",
    sage: "#5CDB95",
    transparentSage: "rgba(92, 219, 149, 0.07)",
    beaver: "#907163",
  },

  fonts: {
    Calibre:
      "Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
    SFMono:
      "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
  },

  fontSizes: {
    xsmall: "12px",
    smallish: "13px",
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
    xxlarge: "22px",
    h3: "32px",
  },

  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",

  borderRadius: "3px",
  navHeight: "100px",
  navScrollHeight: "70px",
  margin: "20px",

  tabHeight: 60,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
