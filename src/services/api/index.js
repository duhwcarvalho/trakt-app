import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
};

const api = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 100000,
  headers
});

export default api;
