import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'react-bootstrap';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider dir="rtl">
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);