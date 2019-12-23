import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
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
        font-family: Roboto, sans-serif;
    }

    #root {
        min-height: 100%;
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }

    .body{
        max-width:1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
        margin-top: 20px;
        font-family: Roboto, sans-serif;
    }
`;
