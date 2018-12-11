import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { login, logout, signup} from './actions/session_actions';
import configureStore from './store/store';
import { fetchBenches } from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  let store;
  if (window.currentUser) {
    let preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, root);

  //testing
  window.fetchBenches = fetchBenches;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});