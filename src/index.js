import { Provider } from 'mobx-react';
import WebFont from 'webfontloader';

import store from './store/index';
import './style/index';

import App from './components/App';


WebFont.load({
  google: {
    families: ['Roboto:300,400,700:latin-ext'],
  },
});

export default () => (
  <Provider {...store}>
    <App />
  </Provider>
);
