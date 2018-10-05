import { observable, action, reaction } from 'mobx';

class AuthStore {
  @observable isAuthenticated = window.localStorage.getItem('isAuthenticated');
  @observable token;

  @action login = (token) => {
    this.token = token;
    if (token) {
      this.isAuthenticated = true;
      window.localStorage.setItem('isAuthenticated', true);
    }
  }
}

export default new AuthStore();
