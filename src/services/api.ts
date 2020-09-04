import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-end3lm.herokuapp.com/',
  timeout: 30000,
});

export default api;
