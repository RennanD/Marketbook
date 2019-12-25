import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Snackbar from 'react-native-snackbar';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formartPrice(product.price),
        }));
        this.setState({ products: data });
    }

    handleAddProduct = id => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
    };

    render() {
        const { navigation } = this.props;
        const { amount } = this.props;
        const { products } = this.state;
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
                                    onPress={() =>
                                        this.handleAddProduct(item.id)
                                    }
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
                                    <ButtonText>
                                        Adicionar ao carrinho
                                    </ButtonText>
                                </AddButton>
                            </Card>
                        )}
                    />
                </Container>
            </>
        );
    }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
