export function addToCart(product) {
    return {
        type: '@cart/ADD',
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
