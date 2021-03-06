// Interacts with components
import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  // Save the token to localStorage
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(values) {
  const token = await usersAPI.login(values);
  localStorage.setItem('token', token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  // getItem returns null if nothing is found
  const token = localStorage.getItem('token');
  // if there is not a token, return null
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    // if above is true, token is expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export async function checkToken () {
  const dateStr = await usersAPI.checkToken();
  return new Date(dateStr);
}

export function getUser() {
  const token = getToken();
  // If there is a token, return the user obj
  // otherwise return null.
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}