import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { ProductTable, Container, Total } from './styles';

export default function Cart() {
    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: formatPrice(product.price * product.amount),
        }))
    );
    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce((total, product) => {
                return total + product.price * product.amount;
            }, 0)
        )
    );

    const dispacth = useDispatch();

    function hanleRemoveToCart(product) {
        dispacth(CartActions.removeFromCart(product));
    }

    function increment(product) {
        dispacth(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }

    function decrement(product) {
        dispacth(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }

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
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
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
                                        onClick={() => increment(product)}
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
                                        hanleRemoveToCart(product.id)
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
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}
