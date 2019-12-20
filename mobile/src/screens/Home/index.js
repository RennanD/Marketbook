import React from 'react';

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
} from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <Banner
            source={{
              uri:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRM2kPVLLqoXqAQbkbEj95O45eebiX4hwnvjsNt39tnOt9rTIQbZA0&usqp=CAc',
            }}
          />
          <Title>iPhone 8</Title>
          <Price> 1400,00 </Price>
          <Button>
            <Amount>
              <TextAmount>1</TextAmount>
            </Amount>
            <TextButton> Adicionar ao carrinho </TextButton>
          </Button>
        </Card>
        <Card>
          <Banner
            source={{
              uri:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRM2kPVLLqoXqAQbkbEj95O45eebiX4hwnvjsNt39tnOt9rTIQbZA0&usqp=CAc',
            }}
          />
          <Title>iPhone 8</Title>
          <Price> 1400,00 </Price>
          <Button>
            <Amount>
              <TextAmount>1</TextAmount>
            </Amount>
            <TextButton> Adicionar ao carrinho </TextButton>
          </Button>
        </Card>
        <Card>
          <Banner
            source={{
              uri:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRM2kPVLLqoXqAQbkbEj95O45eebiX4hwnvjsNt39tnOt9rTIQbZA0&usqp=CAc',
            }}
          />
          <Title>iPhone 8</Title>
          <Price> 1400,00 </Price>
          <Button>
            <Amount>
              <TextAmount>1</TextAmount>
            </Amount>
            <TextButton> Adicionar ao carrinho </TextButton>
          </Button>
        </Card>
        <Card>
          <Banner
            source={{
              uri:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRM2kPVLLqoXqAQbkbEj95O45eebiX4hwnvjsNt39tnOt9rTIQbZA0&usqp=CAc',
            }}
          />
          <Title>iPhone 8</Title>
          <Price> 1400,00 </Price>
          <Button>
            <Amount>
              <TextAmount>1</TextAmount>
            </Amount>
            <TextButton> Adicionar ao carrinho </TextButton>
          </Button>
        </Card>
      </Container>
    </>
  );
}
