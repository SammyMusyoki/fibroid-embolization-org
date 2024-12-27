import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import posthog from 'posthog-js'

// posthog.init(
//   'phc_XPYoARpupvGBndRB6bK1KJxB9dTyCk9NW3egRUq4rd2', { api_host: 'https://app.posthog.com' }
//   )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
