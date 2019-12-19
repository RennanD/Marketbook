import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #ebebeb;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-size: 14px;
        font-family: Roboto sans-serif;
    }

    #root {
        min-height: 100%;
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }
`;
