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
        max-height: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }
`;
