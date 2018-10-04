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

export default {
  instance: api
};
