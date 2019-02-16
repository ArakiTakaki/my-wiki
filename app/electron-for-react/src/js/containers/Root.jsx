import React from 'react';
import PropTypes from 'prop-types';
import Index from '../pages';
import storage from '../store/storage';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { hot } from 'react-hot-loader';

const stores = {
  storage
};
@hot(module)
class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider {...stores}>
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
