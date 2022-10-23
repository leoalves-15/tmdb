import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { colors } from "../colors/colors";

export const SubTitle = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.blackText};
  margin: 10px 0 0 0;
`;

export const Title = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  display: flex;
  align-items: center;
  margin-bottom:0;
  padding-left: 20px;
  color: ${colors.darkText};
  @media (min-width: 800px) {
    padding-left: 0;
  }
`;

export const Description = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  color: ${colors.ligthGreyText};
  margin: 0;
`;

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300;1,700&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
