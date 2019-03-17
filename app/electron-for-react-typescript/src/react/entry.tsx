import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './pages/Index';
import { Provider } from 'mobx-react';
import Storage from './store/Storage';
import DevTools from 'mobx-react-devtools';
import '../../node_modules/reset-css/sass/_reset.scss';
import './entry.sass';

const stores = {
  storage: new Storage()
};

ReactDOM.render(
  <>
    <Provider {...stores}>
      <Index />
    </Provider>
    <DevTools />
  </>,
  document.getElementById('app')
);
