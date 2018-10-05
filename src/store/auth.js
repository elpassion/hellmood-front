import { observable, action } from 'mobx';

class AuthStore {
  @observable isAuthenticated = false;
  @observable token;

  @action login = (token) => {
    this.token = token;
    if (token) {
      this.isAuthenticated = true;
    }
  }
}

export default new AuthStore();
