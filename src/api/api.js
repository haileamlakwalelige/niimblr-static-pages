import axios from 'axios';

const api = axios.create({
  baseURL: "http://192.168.100.40:8000/api/v1",
});

// Removed the interceptor that adds the Authorization header

export default api;