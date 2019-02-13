import ReactDOM from 'react-dom';
import React from 'react';
import '../../node_modules/reset-css/sass/_reset.scss';
import '../scss/base.scss';
import Root from './containers/Root';

console.log(process.env.NODE_ENV); // eslint-disable-line
ReactDOM.render(
  <div>
    <Root />
  </div>,
  document.getElementById('app')
);
