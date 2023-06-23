import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color: blue orange;
    }
    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: #292929;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #a8a8a8;
        border-radius: 20px;
        border: 3px solid #2b2b2b;
        transition: 1s;
    }
    *::-webkit-scrollbar-thumb:hover{
        background-color: #00c451;
    }
    html, body, #root, .App {
        height: 100%;
        background-color: #171717;
        font-family: 'DM Sans', sans-serif;
    }
`;