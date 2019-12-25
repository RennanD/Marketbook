import { all, call, select, takeLatest, put } from 'redux-saga/effects';

import { addToCartSuccess, updateAmountSuccess } from './actions';

import { formartPrice } from '../../../utils/format';
import api from '../../../services/api';

function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

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

    console.tron.log(id, amount);

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_REQUEST', updateAmount),
]);
