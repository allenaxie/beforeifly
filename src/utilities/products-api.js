// Send AJAX requests to backend
import sendRequest from './send-request';

const BASE_URL = '/api/products';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getFeat() {
    return sendRequest(`${BASE_URL}/featured`);
}

