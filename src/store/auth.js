import {
  observable,
  action
} from 'mobx';

class AuthStore {
  @observable token = 'doken';
  @observable user = 'buzer';

  @action login = (token) => {
    this.token = token;
    console.log('sth');
  }
}

export default new AuthStore();
