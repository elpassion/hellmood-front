import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from './store/index';

import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

import './style.scss';

WebFont.load({
    google: {
        families: ['Roboto:300,400,700:latin-ext']
    }
});

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
