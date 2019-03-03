import React from 'react';
import { StorageType } from '../store/Storage';
import Modal from '../layout/Modal/Component';
import { inject, observer } from 'mobx-react';

interface Props {
  children?: any;
  storage?: StorageType;
}
interface State {}

@inject('storage')
@observer
class Index extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.onIncrementEvent = this.onIncrementEvent.bind(this);
    this.onDecrementEvent = this.onDecrementEvent.bind(this);
  }

  public onIncrementEvent() {
    const { storage } = this.props;
    if (storage == null) return;
    storage.incrementAmount();
  }
  public onDecrementEvent() {
    const { storage } = this.props;
    if (storage == null) return;
    storage.decrementAmount();
  }
  public render() {
    if (this.props.storage == null) return null;

    return (
      <div>
        <div>
          <p>testAiasdfdsaueo</p>
          <h1>{this.props.storage.count}</h1>
          <button onClick={this.onIncrementEvent}>+</button>
          <button onClick={this.onDecrementEvent}>-</button>
        </div>
        <Modal />
      </div>
    );
  }
}

export default Index;
