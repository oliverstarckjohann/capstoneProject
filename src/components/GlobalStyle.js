import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    
}

body {
    margin: 0;
    background: white;
}

h1,h2,h3,h4,h5,h6 {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
}
`;

export default GlobalStyle;
