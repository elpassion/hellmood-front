import { Provider } from 'mobx-react';
import { route } from 'preact-router';
import WebFont from 'webfontloader';
import store from './store/index';
import App from './components/App';
import './style/index';

WebFont.load({
  google: {
    families: ['Roboto:300,400,700:latin-ext']
  }
});

export default () => (
  <Provider {...store}>
    <App />
  </Provider>
);
