import styled from "styled-components";
import theme from "./Theme";
import media from "./Media";
const { colors, myColors, fontSizes, fonts } = theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};

  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${myColors.orangeJulius};
    position: relative;
    top: -5px;
    margin-left: 20px;
    ${media.desktop`width: 200px`};
    ${media.tablet`width: 100%;`};
    ${media.thone`margin-left: 10px;`};
  }
`;

export default Heading;
