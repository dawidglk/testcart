import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing:border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

   
    body {
        font-family: 'Roboto', sans-serif;
        height: 100%;
        padding: 0;
    }
`;

export default GlobalStyle;
