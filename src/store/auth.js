import { observable, action, reaction, computed } from 'mobx';
import api from '../api';

class AuthStore {
  @observable token = window.localStorage.getItem('authToken');
  @observable user = JSON.parse(window.localStorage.getItem('user')) || null;

  @action login = (accessToken) => {
    api.auth.authenticate(accessToken)
      .then((res) => {
        this.setToken(res.data.token);
        this.initialUserRedirect();
      });
  };

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
}

export default new AuthStore();
