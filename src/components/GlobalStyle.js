import { createGlobalStyle } from "styled-components";
import image1 from "../img/bg01.png";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    
}
body {
    margin: 0;
    background-color: #e9e7e7;
    background-image: url(${image1});
    background-size: cover;
}
`;

export default GlobalStyle;
