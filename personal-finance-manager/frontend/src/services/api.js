import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://yourapi.com', // Replace with your actual API base URL
});

// Add an interceptor to include the Authorization header in all requests
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken'); // Get the token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add the token to the Authorization header
  }
  return config;
}, error => {
  return Promise.reject(error); // Handle the error
});

export default api;
