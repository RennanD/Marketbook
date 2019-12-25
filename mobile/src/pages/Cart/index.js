import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';

import { formartPrice } from '../../utils/format';

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

function Cart({ navigation, cart, total }) {
    return (
        <>
            <Header navigate={navigation.navigate} />
            <Container>
                <Content>
                    <CartList
                        data={cart}
                        keyExtractor={product => String(product.id)}
                        renderItem={({ item }) => (
                            <Item>
                                <Info>
                                    <Product>
                                        <Banner source={{ uri: item.image }} />
                                        <Description>
                                            <Title>{item.title}</Title>
                                            <Price>{item.priceFormatted}</Price>
                                        </Description>
                                    </Product>
                                    <Icon
                                        name="cart-remove"
                                        size={28}
                                        color="#2193f6"
                                    />
                                </Info>
                                <Footer>
                                    <AmountView>
                                        <MdIcon
                                            name="remove-circle-outline"
                                            size={26}
                                            color="#2193f6"
                                        />
                                        <Input value={String(item.amount)} />
                                        <Icon
                                            name="plus-circle-outline"
                                            size={26}
                                            color="#2193f6"
                                        />
                                    </AmountView>
                                    <Subtotal>{item.subtotal}</Subtotal>
                                </Footer>
                            </Item>
                        )}
                    />
                    <TotatView>
                        <TotalText>TOTAL</TotalText>
                        <TotalPrice>{total}</TotalPrice>
                    </TotatView>

                    <FinishButton>
                        <TextButton>Finalizar pedido</TextButton>
                    </FinishButton>
                </Content>
            </Container>
        </>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formartPrice(product.price * product.amount),
    })),
    total: formartPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
});

export default connect(mapStateToProps, null)(Cart);
