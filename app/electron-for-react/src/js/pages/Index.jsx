import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import { ipcRenderer } from 'electron';
import C from '../../constants/global';
const { MESSAGE } = C.IPC;

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
    this.electron = ipcRenderer.on(MESSAGE.SERVER_TO_CLIENT, (event, args) => {
      console.log(args);
    });
  }
  componentWillUnmount() {
    ipcRenderer.removeListener(this.electron);
  }

  onChange(e) {
    const { storage } = this.props;
    storage.setCount(10);
    ipcRenderer.send(MESSAGE.CLIENT_TO_SERVER, { vlaue: 'test' });
    console.log('emit');
  }

  render() {
    return (
      <div>
        test aiueo kakikukeko
        <button onClick={this.onChange}>test</button>
        <p>{this.props.storage.value.count}</p>
        <p> {this.props.storage.param} </p>
        <div>
          <button>send</button>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  children: PropTypes.any,
  storage: PropTypes.any
};

export default Index;
