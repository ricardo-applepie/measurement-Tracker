import React from 'react';
// react dom renderer
import ReactDOM from 'react-dom';
// app component
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// general app css
import './styles/general.scss';
// redux store
import { store } from './store/store';
// react router
import { BrowserRouter } from 'react-router-dom';
// provider
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
