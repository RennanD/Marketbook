import React from 'react';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from '../../assets/MarketBook/Logo.png';
import { Container, Logo, NavigateButton, Badge, BadgeNumber } from './styles';

export default function Header({ navigate }) {
    const cartSize = useSelector(state => state.cart.length);

    return (
        <Container>
            <NavigateButton onPress={() => navigate('Home')}>
                <Logo source={logo} />
            </NavigateButton>
            <NavigateButton onPress={() => navigate('Cart')}>
                <Icon name="cart-outline" size={30} color="#fefefe" />
                {cartSize > 0 && (
                    <Badge>
                        <BadgeNumber>{cartSize}</BadgeNumber>
                    </Badge>
                )}
            </NavigateButton>
        </Container>
    );
}
