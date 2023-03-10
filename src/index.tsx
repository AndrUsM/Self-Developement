import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ApplicationRouter from './controllers/router';
import { Provider } from 'react-redux';
import { reduxStore } from './framework-drivers/storages/redux-storage/redux-storage.store';
import './general.scss';
import { Alerts } from './3-rd-party-services/alerts/alerts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <ApplicationRouter/>
      <Alerts />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
