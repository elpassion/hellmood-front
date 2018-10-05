import axios from 'axios';

const HOST = process.env.NODE_ENV;

const api = axios.create({
  baseURL: HOST,
  withCredentials: true,
});

export default {
  instance: api
};
