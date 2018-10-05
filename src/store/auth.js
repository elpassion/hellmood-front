import { observable, action, reaction } from 'mobx';

class AuthStore {
  @observable isAuthenticated = window.localStorage.getItem('isAuthenticated');
  @observable token = window.localStorage.getItem('accessToken');

  @action login = (token) => {
    this.token = token;
    if (token) {
      this.isAuthenticated = true;
      window.localStorage.setItem('isAuthenticated', true);
      window.localStorage.setItem('accessToken', token);
    } else {
      window.localStorage.removeItem('isAuthenticated');
      window.localStorage.removeItem('accessToken');
    }
  }
}

export default new AuthStore();
