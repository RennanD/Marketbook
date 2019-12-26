import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../utils/format';

import api from '../../services/api';

import { ProductList } from './styles';

export default function Home() {
    const [products, setProducts] = useState([]);

    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;

            return sumAmount;
        }, {})
    );

    const dispacth = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            setProducts(data);
        }
        loadProducts();
    }, []);

    function handleAddProduct(id) {
        dispacth(CartActions.addToCartRequest(id));
    }

    return (
        <ProductList>
            {products.map(product => (
                <li key={String(product.id)}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                    <button
                        type="button"
                        onClick={() => handleAddProduct(product.id)}
                    >
                        <div>
                            <MdAddShoppingCart size={16} color="#fefefe" />{' '}
                            {amount[product.id] || 0}
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}
