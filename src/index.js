import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';

let store = configureStore();
ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);


