import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';

import {
  Container,
  Content,
  AmountView,
  Banner,
  Info,
  CartList,
  Footer,
  Item,
  Price,
  Subtotal,
  Title,
  TotalPrice,
  TotalText,
  TotatView,
  Product,
  Description,
  Input,
  FinishButton,
  TextButton,
} from './styles';

export default function Cart({navigation}) {
  const data = [
    {
      id: 1,
      uri:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9571lGdFlyuqqHnRznah0ZGWJ1CSD0a2QS5fvP3z2YNnWYuwxouM&usqp=CAc',
    },
    {
      id: 2,
      uri:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9571lGdFlyuqqHnRznah0ZGWJ1CSD0a2QS5fvP3z2YNnWYuwxouM&usqp=CAc',
    },
  ];

  return (
    <>
      <Header navigate={navigation.navigate} />
      <Container>
        <Content>
          <CartList
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Item>
                <Info>
                  <Product>
                    <Banner source={{uri: item.uri}} />
                    <Description>
                      <Title>iPhone 8</Title>
                      <Price>1400,90</Price>
                    </Description>
                  </Product>
                  <Icon name="cart-remove" size={28} color="#2193f6" />
                </Info>
                <Footer>
                  <AmountView>
                    <MdIcon
                      name="remove-circle-outline"
                      size={26}
                      color="#2193f6"
                    />
                    <Input value="2" />
                    <Icon
                      name="plus-circle-outline"
                      size={26}
                      color="#2193f6"
                    />
                  </AmountView>
                  <Subtotal>R$ 2801,80</Subtotal>
                </Footer>
              </Item>
            )}
          />
          <TotatView>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>R$ 2801,80</TotalPrice>
          </TotatView>

          <FinishButton>
            <TextButton>Finalizar pedido</TextButton>
          </FinishButton>
        </Content>
      </Container>
    </>
  );
}
