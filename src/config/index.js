module.exports = {
  siteTitle: "Patrick Puga | Software Engineer",
  siteDescription:
    "Patrick Puga is a Software Engineer based in El Paso, TX with experience developing enterprise applications throughout the full software lifecycle.",
  siteKeywords:
    "Patrick Puga, Patrick, Puga, ppuga999, software engineer, front-end engineer, backend engineer, web developer, javascript, full stack engineer, enterprise",
  siteUrl: "https://patrickpuga.com",
  siteLanguage: "en_US",
  googleAnalyticsID: "UA-174942381-1",
  googleVerification: "u5ZPW9SOEXN-xg5CFpQyGG2FIvkOYkIv4TviQZRa1Wk",
  name: "Patrick Puga",
  location: "El Paso, TX",
  email: "ppuga999@gmail.com",
  // github: '',
  // twitterHandle: '',
  socialMedia: [
    {
      name: "Github",
      url: "",
    },
    {
      name: "Linkedin",
      url: "",
    },
    {
      name: "Codepen",
      url: "",
    },
    {
      name: "Instagram",
      url: "",
    },
    {
      name: "Twitter",
      url: "",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Experience",
      url: "#jobs",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ],

  navHeight: 100,

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
