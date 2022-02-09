// Send AJAX requests to backend
import { getToken } from './users-service';
import sendRequest from './send-request'; 

const BASE_URL = '/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(values) {
  return sendRequest(`${BASE_URL}/login`, 'POST', values);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}


