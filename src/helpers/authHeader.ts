import api from '../services/api';

export function authHeader() {
  const token = localStorage.getItem('@3lm:token');
  const email = localStorage.getItem('@3lm:email');

  if (token && email) {
    api.defaults.headers.authorization = `Bearer ${token}`;
    return { token, email };
  }

  return {};
}
