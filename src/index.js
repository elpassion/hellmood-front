import { Provider } from 'mobx-react';
import { route } from 'preact-router';
import store from './store/index';
import App from './components/App';

export default () => (
  <Provider {...store}>
    <App />
  </Provider>
);
