import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
    }

    ul,li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: #1e293b;
        font-weight: 500;
    }

    body{
        font-family: 'Poppins', sans-serif;
        background: #f1f5f9;
        min-height: 100vh;
    }
`;
