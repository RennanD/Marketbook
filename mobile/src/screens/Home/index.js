import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import Container from '../../components/Container';

import {
  Amount,
  Banner,
  Button,
  Card,
  Price,
  TextAmount,
  TextButton,
  Title,
  ProductList,
} from './styles';

export default function Home() {
  const data = [
    {
      title: 'iPhone 8',
      price: '1400,00',
      uri:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRM2kPVLLqoXqAQbkbEj95O45eebiX4hwnvjsNt39tnOt9rTIQbZA0&usqp=CAc',
    },
    {
      title: 'Redmi Note 7',
      price: '1100,00',
      uri:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSa0o_b9Kp5TyJQGydo9dRQrJBXBXkeE0bRSNqA0TiVFiCvt7el9M&usqp=CAc',
    },
    {
      title: 'MiA3',
      price: '1500,00',
      uri:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOgWLq6KSg1nvWkH42Q7IkdXvgeO3n0_v-vtPViel9FNdF6tWWVQ&usqp=CAc',
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <ProductList
          data={data}
          keyExctractor={product => product.name}
          renderItem={({item}) => (
            <Card>
              <Banner source={{uri: item.uri}} />
              <Title>{item.title}</Title>
              <Price>{item.price}</Price>
              <Button>
                <Amount>
                  <Icon name="cart-plus" color="#fefefe" size={20} />
                  <TextAmount>1</TextAmount>
                </Amount>
                <TextButton> Adicionar ao carrinho </TextButton>
              </Button>
            </Card>
          )}
        />
      </Container>
    </>
  );
}
