import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import logo from '../../assets/logo.svg';

import { Container, Logo, Cart } from './styles';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <Logo>
                    <img src={logo} alt="" />
                    <strong>MarketBook</strong>
                </Logo>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong> Meu carrinho </strong>
                    <span> 3 itens </span>
                </div>
                <MdShoppingCart size={36} color="#fefefe" />
            </Cart>
        </Container>
    );
}
