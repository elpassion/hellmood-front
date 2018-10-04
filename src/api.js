/* eslint no-console: 0 */
import axios from 'axios';

const HOST = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: HOST,
  withCredentials: true,
});

const prodInterceptors = () => {
  api.interceptors.response.use(
    (resp) => resp,
    (err) => {
      err.response.status === 401 && console.log('BAD BOY!')
      return Promise.reject(err);
    });
};

prodInterceptors();

const auth = {
  authenticate: data => api.post('/authenticate', data),
};


export default { instance: api, auth };
