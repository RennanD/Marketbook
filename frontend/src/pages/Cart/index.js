import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { ProductTable, Container, Total } from './styles';

class Cart extends Component {
    hanleRemoveToCart = product => {
        const { removeFromCart } = this.props;

        removeFromCart(product);
    };

    increment = product => {
        const { updateAmountRequest } = this.props;
        updateAmountRequest(product.id, product.amount + 1);
    };

    decrement = product => {
        const { updateAmountRequest } = this.props;
        updateAmountRequest(product.id, product.amount - 1);
    };

    render() {
        const { cart } = this.props;

        return (
            <Container>
                <ProductTable>
                    <thead>
                        <tr>
                            <th />
                            <th>PRODUTO</th>
                            <th>QTD</th>
                            <th>SUBTOTAL</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(product => (
                            <tr>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </td>
                                <td>
                                    <strong>{product.title}</strong>
                                    <span>{product.priceFormatted}</span>
                                </td>
                                <td>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                this.decrement(product)
                                            }
                                        >
                                            <MdRemoveCircleOutline
                                                size={20}
                                                color="#2193f6"
                                            />
                                        </button>
                                        <input
                                            type="number"
                                            readOnly
                                            value={product.amount}
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                this.increment(product)
                                            }
                                        >
                                            <MdAddCircleOutline
                                                size={20}
                                                color="#2193f6"
                                            />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>{product.subtotal}</strong>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            this.hanleRemoveToCart(product.id)
                                        }
                                    >
                                        <MdDelete size={20} color="#2193f6" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </ProductTable>
                <footer>
                    <button>Finalizar pedido</button>
                    <Total>
                        <span>TOTAL</span>
                        <strong>{this.props.total}</strong>
                    </Total>
                </footer>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
