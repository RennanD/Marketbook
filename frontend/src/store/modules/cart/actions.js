export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        id,
    };
}

export function addToCartSuccess(product) {
    return {
        type: '@cart/ADD_SUCCESS',
        product,
    };
}

export function removeFromCart(product) {
    return {
        type: '@cart/REMOVE',
        product,
    };
}

export function updateAmount(product, amount) {
    return {
        type: '@cart/UPDATE',
        product,
        amount,
    };
}
