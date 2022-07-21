import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    html {
        font-size: 62.5%;
        font-family: 'Roboto Condensed', sans-serif;
      };      
    body{
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    };
`;

export default GlobalStyle;