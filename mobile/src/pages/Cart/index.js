import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
} from './styles';

function Cart({
    navigation,
    cart,
    total,
    updateAmountRequest,
    removeFromCart,
}) {
    function increment(product) {
        const { id, amount } = product;

        updateAmountRequest(id, amount + 1);
    }

    function decrement(product) {
        const { id, amount } = product;

        updateAmountRequest(id, amount - 1);
    }

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
                                        onPress={() => removeFromCart(item.id)}
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
const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
