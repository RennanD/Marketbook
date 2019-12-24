import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';

import {
  Container,
  AddButton,
  AmountText,
  AmountView,
  Banner,
  ButtonText,
  Card,
  Price,
  ProductList,
  Title,
} from './styles';

export default function Home({navigation}) {
  return (
    <>
      <Header navigate={navigation.navigate} />
      <Container>
        <Card>
          <Banner
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9571lGdFlyuqqHnRznah0ZGWJ1CSD0a2QS5fvP3z2YNnWYuwxouM&usqp=CAc',
            }}
          />
          <Title>iPhone 8</Title>
          <Price>2.4000,90</Price>
          <AddButton>
            <AmountView>
              <Icon name="cart-plus" size={16} color="#fefefe" />
              <AmountText>1</AmountText>
            </AmountView>
            <ButtonText>Adicionar ao carrinho</ButtonText>
          </AddButton>
        </Card>
      </Container>
    </>
  );
}
