import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    height: 90px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2193f6;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);

    a {
        text-decoration: none;
    }
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 36px;
        color: #fefefe;
    }

    strong {
        font-size: 30px;
        color: #fefefe;
        margin-left: 10px;
    }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;

    &:hover {
        opacity: 0.7;
        transition: opacity 0.2s;
    }

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            font-size: 20px;
            display: block;
            color: #fefefe;
        }

        span {
            font-size: 14px;
            color: #eee;
        }
    }
`;
