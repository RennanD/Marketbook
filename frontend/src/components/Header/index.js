import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { connect } from 'react-redux';

import logo from '../../assets/logo.svg';

import { Container, Logo, Cart } from './styles';

function Header({ cart }) {
    console.log(cart);

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
                    <span> {cart.length} itens </span>
                </div>
                <MdShoppingCart size={36} color="#fefefe" />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cart: state.cart,
}))(Header);
