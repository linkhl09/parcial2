import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {intlProvider} from 'react-intl';

ReactDOM.render(
  <intlProvider locale="en">
    <App />
  </intlProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
