import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import { Provider } from 'react-redux';
import store from './app/store';
import './styles/global.scss';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
