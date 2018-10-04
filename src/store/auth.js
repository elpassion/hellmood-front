import {
  observable,
  action,
  reaction,
  computed,
} from 'mobx';
import { route } from 'preact-router';
import api from '../api';
import routeMap from '../config/routeMap';

class AuthStore {
  constructor () {
    reaction(
      () => this.user,
      (user) => {
        if (user) {
          window.localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          window.localStorage.removeItem('user');
        }
      },
    );

    const { headers } = api.instance.defaults;
    if (this.token) headers.common['token'] = this.token;
  }

  @observable token = window.localStorage.getItem('authToken');
  @observable user = JSON.parse(window.localStorage.getItem('user')) || null;

  @action login = (accessToken) => {
    api.auth.authenticate(accessToken)
      .then((res) => {
        this.setUser(res.data);
        this.setToken(res.data.token);
        this.initialUserRedirect();
      });
  }

  @computed get isUserTenant () {
    return !this.user.ownedParkingSpace;
  }

  @action setUser = (userData) => {
    this.user = JSON.parse(JSON.stringify(userData));
  }

  @action setToken = (token) => {
    const { headers } = api.instance.defaults;

    if (token) {
      window.localStorage.setItem('authToken', token);
      headers.common['token'] = token;
    } else {
      window.localStorage.removeItem('authToken');
      delete headers.common['token'];
    }
  }

  @action initialUserRedirect = () => {
    !this.isUserTenant ? route(routeMap.yourPlace) : route(routeMap.interested);
  }

  @action logout = () => {
    this.user = null;
    this.setToken();
    route('/');
  }
}

export default new AuthStore();
