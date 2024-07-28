import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5050/api', // Make sure this matches your backend's base URL
});

export default api;
