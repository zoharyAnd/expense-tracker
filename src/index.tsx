import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/Spinner';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Suspense fallback={<Spinner variant="success" />}>
    <App />
  </Suspense>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
