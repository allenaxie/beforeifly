import sendRequest from "./send-request";


const BASE_URL = '/api/orders';

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}

export function addProductToCart(productId) {
    console.log('orders-api',productId)
    // Only send productId for best security (do NOT include price)
    return sendRequest(`${BASE_URL}/cart/products/${productId}`, 'POST');
}