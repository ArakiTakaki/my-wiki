import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import moment from 'moment';

@inject('storage')
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
    const { storage } = this.props;
    storage.setCount(10);
  }

  render() {
    return (
      <div>
        test aiueo kakikukeko
        <button onClick={this.onChange}>test</button>
        <p>{this.props.storage.value.count}</p>
        <p> {this.props.storage.param} </p>
      </div>
    );
  }
}

Index.propTypes = {
  children: PropTypes.any,
  storage: PropTypes.any
};

export default Index;
