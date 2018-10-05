import { observable, action } from 'mobx';
import { route } from 'preact-router';
import routeMap from '../config/routeMap';

class AuthStore {
  @observable isAuthenticated = false;
  @observable token;

  @action login = (token) => {
    this.token = token;
    if (token) {
      this.isAuthenticated = true;
      route(routeMap.home);
    }
  }
}

export default new AuthStore();
