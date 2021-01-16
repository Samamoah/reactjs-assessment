import 'typeface-roboto';

import React from 'react';
import { render } from 'react-dom';
import App from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { unregister } from './serviceWorker';
import * as Sentry from '@sentry/browser';

const rootElement = document.querySelector('#root');

window.onload = () => {
  if (rootElement) {
    if (process.env.NODE_ENV === "production") {
      Sentry.init({
        dsn: "https://aad380afad3940b98b73ccfb26c1e827@sentry.io/1840557",
      });
    }

    render(
      <Router>
        <App />
      </Router>,
      rootElement
    );
  }
};

unregister();