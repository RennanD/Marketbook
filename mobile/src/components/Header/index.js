import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from '../../assets/MarketBook/Logo.png';
import {Container, Logo, NavigateButton} from './styles';

export default function Header({navigate}) {
  return (
    <Container>
      <NavigateButton onPress={() => navigate('Home')}>
        <Logo source={logo} />
      </NavigateButton>
      <NavigateButton onPress={() => navigate('Cart')}>
        <Icon name="cart-outline" size={28} color="#fefefe" />
      </NavigateButton>
    </Container>
  );
}
