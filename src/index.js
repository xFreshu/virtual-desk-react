import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root';
import GlobalStyle from "./assets/Global Style/createGlobalStyle";
import {ThemeProvider} from "styled-components";
import {theme} from "./assets/Global Style/Theme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}/>
        <GlobalStyle/>
        <Root/>
    </React.StrictMode>,
    document.getElementById('root')
);

