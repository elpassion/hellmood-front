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
  @observable token = 'doken';
  @observable user = 'buzer';
}

export default new AuthStore();
