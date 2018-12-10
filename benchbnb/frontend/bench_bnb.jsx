import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { login, logout, signup} from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});