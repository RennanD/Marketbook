import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { formartPrice } from '../../utils/format';

import Header from '../../components/Header';

import * as CartActions from '../../store/modules/cart/actions';

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

export default function Home({ navigation }) {
    const [products, setProducts] = useState([]);

    const amount = useSelector(state =>
        state.cart.reduce((amount, product) => {
            amount[product.id] = product.amount;
            return amount;
        }, {})
    );

    const dispacth = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formartPrice(product.price),
            }));
            setProducts(data);
        }
        loadProducts();
    }, []);

    function handleAddProduct(id) {
        dispacth(CartActions.addToCartRequest(id));
    }

    return (
        <>
            <Header navigate={navigation.navigate} />
            <Container>
                <ProductList
                    data={products}
                    keyExtractor={product => String(product.id)}
                    renderItem={({ item }) => (
                        <Card>
                            <Banner source={{ uri: item.image }} />
                            <Title>{item.title}</Title>
                            <Price>{item.priceFormatted}</Price>
                            <AddButton
                                onPress={() => handleAddProduct(item.id)}
                            >
                                <AmountView>
                                    <Icon
                                        name="cart-plus"
                                        size={16}
                                        color="#fefefe"
                                    />
                                    <AmountText>
                                        {amount[item.id] || 0}{' '}
                                    </AmountText>
                                </AmountView>
                                <ButtonText>Adicionar ao carrinho</ButtonText>
                            </AddButton>
                        </Card>
                    )}
                />
            </Container>
        </>
    );
}
