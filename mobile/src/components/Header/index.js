import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from '../../assets/Logo.png';

import {Container, Title, Content} from './styles';

export default function Header() {
  return (
    <Container>
      <Title source={logo} />
      <Icon name="cart-outline" color="#fefefe" size={35} />
    </Container>
  );
}
