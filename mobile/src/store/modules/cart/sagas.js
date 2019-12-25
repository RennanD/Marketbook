import { all, call, select, takeLatest } from 'redux-saga/effects';

import { addToCartRequest } from './actions';

import { formartPrice } from '../../../utils/format';
import api from '../../../services/api';

function* addToCart({ id }) {
    // const productExists = yield select(state =>
    //     state.cart.find(p => p.id === id)
    // );

    const response = yield call(api.get, `/products/${id}`);

    const data = {
        ...response.data,
        amount: 1,
        priceFormatted: formartPrice(response.data.price),
    };
}

export default all([takeLatest('@cart/ADD_RESQUEST', addToCart)]);
