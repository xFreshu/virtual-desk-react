import {createGlobalStyle} from 'styled-components';
import {theme} from "./Theme";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
  }
`

export default GlobalStyle;

