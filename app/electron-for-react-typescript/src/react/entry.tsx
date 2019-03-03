import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './pages/Index';
import { Provider } from 'mobx-react';
import Storage from './store/Storage';
import DevTools from 'mobx-react-devtools';
import LayoutStorage from './store/LayoutStorage';
import '../../node_modules/reset-css/sass/_reset.scss';
import ModalStore from './store/ModalStore';
import './entry.sass';

const stores = {
  storage: new Storage(),
  layout: new LayoutStorage(),
  modal: new ModalStore()
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
