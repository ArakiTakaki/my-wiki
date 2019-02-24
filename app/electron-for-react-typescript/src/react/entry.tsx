import * as React from 'react';
import { render } from 'react-dom';
import Index from './pages/Index';
import { Provider } from 'mobx-react';
import Storage from './store/Storage';
import DevTools from 'mobx-react-devtools';
import LayoutStorage from './store/LayoutStorage';

const stores = {
  storage: new Storage(),
  layout: new LayoutStorage()
};

render(
  <>
    <Provider {...stores}>
      <Index />
    </Provider>
    <DevTools />
  </>,
  document.getElementById('app')
);
