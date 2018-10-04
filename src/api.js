/* eslint no-console: 0 */
import axios from 'axios';
import { route } from 'preact-router';

const  HOST = process.env.NODE_ENV;

const api = axios.create({
  baseURL: HOST,
  withCredentials: true,
});

export default {
  instance: api
};
