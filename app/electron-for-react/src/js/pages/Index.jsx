import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import moment from 'moment';

@inject('store')
@observer
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      currentDate: moment(),
      isogasiihi: [{ date: moment('2019-02-13'), state: 'selected' }]
    };
  }
  onChange(e) {
    const { store } = this.props;
    store.setParam(e.currentTarget.value);
  }

  render() {
    return (
      <div>
        test
        <p> {this.props.store.param} </p>
      </div>
    );
  }
}

Index.propTypes = {
  children: PropTypes.any,
  store: PropTypes.any
};

export default Index;
