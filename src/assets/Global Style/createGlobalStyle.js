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
  html{
  ::-webkit-scrollbar {
 width: 9px;
 height: 9px;
}
::-webkit-scrollbar-thumb {
 background: #2a2734;
 border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
 background: linear-gradient(13deg, #c7ceff 14%,#f9d4ff 64%);
}
::-webkit-scrollbar-track{
 background: #ffffff;
 border-radius: 10px;
 box-shadow: inset 7px 10px 12px #f0f0f0;
}
  }
`


export default GlobalStyle;

