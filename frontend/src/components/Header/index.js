import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { useSelector } from 'react-redux';

import logo from '../../assets/logo.svg';

import { Container, Logo, Cart } from './styles';

export default function Header() {
    const cartSize = useSelector(state => state.cart.length);

    return (
        <Container>
            <Link to="/">
                <Logo>
                    <img src={logo} alt="" />
                </Logo>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong> Meu carrinho </strong>
                    <span> {cartSize} itens </span>
                </div>
                <MdShoppingCart size={36} color="#fefefe" />
            </Cart>
        </Container>
    );
}
