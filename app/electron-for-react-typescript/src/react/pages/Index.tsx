import React from 'react';
import * as mobx from 'mobx-react';
import { StorageType } from '../store/Storage';
import Layout from '../components/templates/Layout';

interface Props {
  children?: any;
  storage?: StorageType;
}
interface State {}

@mobx.inject('storage')
@mobx.observer
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
      <Layout>
        <div>
          <p>testAiasdfdsaueo</p>
          <h1>{this.props.storage.count}</h1>
          <button onClick={this.onIncrementEvent}>+</button>
          <button onClick={this.onDecrementEvent}>-</button>
        </div>
      </Layout>
    );
  }
}

export default Index;
