import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
// import App from './App';
import Router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
