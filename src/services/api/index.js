import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
};

const api = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 100000,
  headers
});

api.interceptors.response.use(response => {
  return response;
}, error => {
  const _error = error.response || error;

  return Promise.reject(_error);
});

export default api;
