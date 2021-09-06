import axios from 'axios';

const api = axios.create(
  {
    baseURL: `http://185.165.118.211:9074/api/v1/`
  }
);

api.interceptors.request.use(
  async config => {
    config.headers = {
      'Authorization': "Bearer " + localStorage.getItem('Token'),
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

export default api;

