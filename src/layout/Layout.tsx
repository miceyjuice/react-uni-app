import { FC } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "../styledHelpers/Theme";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${Theme.Colors.black}
  }

  *, *::before, *::after{
    box-sizing: inherit;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <div>{children}</div>
      </>
    </ThemeProvider>
  );
};

export default Layout;
