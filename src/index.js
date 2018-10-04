import { Provider } from 'mobx-react';
import { route } from 'preact-router';
import Push from 'push.js';
import routeMap from './config/routeMap';
import store from './store/index';
import App from './components/App';

import io from 'socket.io-client';
require('dotenv').config();

const socket = io.connect(
  (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
    ? process.env.PREACT_APP_API_URL_DEV
    : process.env.PREACT_APP_API_URL_PROD,
  {
    transports: ['websocket'],
    reconnection: false,
});

socket.on('ownerShared', () => {
  if (store.authStore.isUserTenant && !store.authStore.user.borrowedParkingSpace) {
    Push.create('New parking space is available!');
    route(routeMap.home);
  }
});

socket.on('ownerCancel', (owner) => {
  if (store.authStore.isUserTenant) {
    store.authStore.user.borrowedParkingSpace === owner.ownedParkingSpace &&
      store.appStore.cancelReservation();

    route(routeMap.home);
  }
});

socket.on('tenantReserve', () => {
  if (store.authStore.isUserTenant) {
    route(routeMap.home);
  }
});

socket.on('tenantCancel', (ownerParkingSpaceNumber) => {
  if (store.authStore.isUserTenant) {
    store.authStore.user.borrowedParkingSpace !== ownerParkingSpaceNumber &&
      Push.create('New parking space is available!');
    route(routeMap.home);
  } else if (store.authStore.user.ownedParkingSpace === ownerParkingSpaceNumber) {
    Push.create('Your place is free once again');
  }
});

export default () => (
  <Provider {...store}>
    <App />
  </Provider>
);
