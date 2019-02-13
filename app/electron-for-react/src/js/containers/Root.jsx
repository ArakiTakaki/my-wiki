import React from 'react';
import PropTypes from 'prop-types';
import Index from '../pages';
import Store from '../store';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
const store = {
  store: new Store()
};
class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider {...store}>
          <Index />
        </Provider>
        {process.env.NODE_ENV === 'development' ? <DevTools /> : null}
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.any
};

export default Root;
