import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

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
    ActionButton,
    EmptyCart,
} from './styles';

export default function Cart({ navigation }) {
    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: formartPrice(product.price * product.amount),
        }))
    );

    const total = useSelector(state =>
        formartPrice(
            state.cart.reduce((total, product) => {
                return total + product.price * product.amount;
            }, 0)
        )
    );

    const cartSize = useSelector(state => state.cart.length);

    const dispatch = useDispatch();

    function increment(product) {
        const { id, amount } = product;

        dispatch(CartActions.updateAmountRequest(id, amount + 1));
    }

    function decrement(product) {
        const { id, amount } = product;

        dispatch(CartActions.updateAmountRequest(id, amount - 1));
    }

    if (cartSize <= 0)
        return (
            <>
                <Header navigate={navigation.navigate} />
                <Container>
                    <Content>
                        <EmptyCart>
                            Adicione produtos ao carrinho para continuar.
                        </EmptyCart>
                    </Content>
                </Container>
            </>
        );

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
                                    <ActionButton
                                        onPress={() =>
                                            dispatch(
                                                CartActions.removeFromCart(
                                                    item.id
                                                )
                                            )
                                        }
                                    >
                                        <Icon
                                            name="cart-remove"
                                            size={28}
                                            color="#2193f6"
                                        />
                                    </ActionButton>
                                </Info>
                                <Footer>
                                    <AmountView>
                                        <ActionButton
                                            onPress={() => decrement(item)}
                                        >
                                            <MdIcon
                                                name="remove-circle-outline"
                                                size={26}
                                                color="#2193f6"
                                            />
                                        </ActionButton>
                                        <Input
                                            value={String(item.amount)}
                                            editable={false}
                                        />
                                        <ActionButton
                                            onPress={() => increment(item)}
                                        >
                                            <Icon
                                                name="plus-circle-outline"
                                                size={26}
                                                color="#2193f6"
                                            />
                                        </ActionButton>
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
