import { all, call, select, takeLatest, put } from 'redux-saga/effects';

import { addToCartSuccess, updateAmountSuccess } from './actions';

import { formartPrice } from '../../../utils/format';
import api from '../../../services/api';

function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;

    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        alert('Quantide em estoque insuficiente.');
        return;
    }

    if (productExists) {
        yield put(updateAmountSuccess(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formartPrice(response.data.price),
        };
        yield put(addToCartSuccess(data));
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        alert('Quantide em estoque insuficiente.');
        return;
    } else {
        yield put(updateAmountSuccess(id, amount));
    }
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_REQUEST', updateAmount),
]);
