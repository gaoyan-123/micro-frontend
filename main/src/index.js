import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from './micro-fe';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerMicroApps([
  {
    name: 'react-app', // app name registered
    entry: '//localhost:3001/',
    container: '#yourContainer',
    activeRule: '/react-app',
  },
  {
    name: 'vue-app',
    entry: '//localhost:8080/',
    container: '#yourContainer',
    activeRule: '/vue-app1',
  },
  {
    name: 'vue-app2',
    entry: '//localhost:8081/',
    container: '#yourContainer',
    activeRule: '/vue-app2',
  },
]);

start();
reportWebVitals();



