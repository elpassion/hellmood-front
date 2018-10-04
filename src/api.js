/* eslint no-console: 0 */
import axios from 'axios';

const HOST = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: HOST,
  withCredentials: true,
});

export default {
  instance: api,
};
