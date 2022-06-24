import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";

import { userActions } from "redux/actions";
import App from './App';
import store from "redux/store";

import './styles/index.scss';

store.dispatch(userActions.fetchUserData());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>  
  </React.StrictMode>
);