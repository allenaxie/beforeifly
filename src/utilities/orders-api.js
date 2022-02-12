import sendRequest from "./send-request";

const BASE_URL = '/api/orders';

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}

export function addProductToCart(productId) {
    // Only send productId for best security (do NOT include price)
    return sendRequest(`${BASE_URL}/cart/products/${productId}`, 'POST');
}

// Update the product's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setProductQtyInCart (productId, newQty) {
    console.log(productId, newQty)
    return sendRequest (`${BASE_URL}/cart/qty`, 'PUT', { productId, newQty});
}

export function checkout () {
    return sendRequest (`${BASE_URL}/cart/checkout`, 'POST');
}

export function getAll () {
    return sendRequest (BASE_URL);
}

