/* eslint no-console: 0 */
import axios from 'axios';
import { route } from 'preact-router';

let HOST = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  HOST = process.env.PREACT_APP_API_URL_DEV;
} else {
  HOST = process.env.PREACT_APP_API_URL_PROD;
}

const api = axios.create({
  baseURL: HOST,
  withCredentials: true,
});

const devInterceptors = () => {
  api.interceptors.response.use((resp) => {
    console.log(resp.config.url, resp.data);
    return resp;
  }, function (error) {
      console.log('ERROR', error.response.data.error.message);
      if (error.response.status === 401) {
        console.log('You are unauthorized and I will redirect you! :speak_no_evil:');
        route('/');
      }
      return Promise.reject(error);
  });
};

const prodInterceptors = () => {
  api.interceptors.response.use(
    (resp) => resp,
    (err) => {
      err.response.status === 401 && route('/');
      return Promise.reject(err);
  });
};

process.env.NODE_ENV === 'development' ? devInterceptors() : prodInterceptors();

const auth = {
  authenticate: data => api.post('/authenticate', data),
};

const user = {
  saveDetails: data => api.put('/userDetails', data),
  details: () => api.get('/userDetails'),
};

const owner = {
  share: () => api.get('/owner/share'),
  cancelSharing: () => api.get('/owner/cancelSharing'),
};

const tenant = {
  parkingStatus: () => api.get('tenant/parkingStatus'),
  reserve: () => api.get('/tenant/reserve'),
  cancelReservation: () => api.get('/tenant/cancelReservation'),
};

export default {
  instance: api,
  auth,
  user,
  owner,
  tenant,
};
