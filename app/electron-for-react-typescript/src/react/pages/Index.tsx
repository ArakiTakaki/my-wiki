import React from 'react';
import { StorageType } from '../store/Storage';
import Modal from '../layout/Modal/Component';
import { inject, observer } from 'mobx-react';

interface Props {
  children?: any;
  storage?: StorageType;
}
interface State {
  isModalOpen: boolean;
}

@inject('storage')
@observer
class Index extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.onIncrementEvent = this.onIncrementEvent.bind(this);
    this.onDecrementEvent = this.onDecrementEvent.bind(this);

    this.modalCloseEvent = this.modalCloseEvent.bind(this);
    this.modalOpenEvent = this.modalOpenEvent.bind(this);
    this.state = {
      isModalOpen: true
    };
  }

  public modalCloseEvent() {
    this.setState({ isModalOpen: false });
  }
  public modalOpenEvent() {
    this.setState({ isModalOpen: true });
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
        <div>
          <button onClick={this.modalOpenEvent}>onOpenModal</button>
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          title="sample"
          content="sample"
          footerType="double"
          onClickPrimary={this.modalCloseEvent}
        />
      </div>
    );
  }
}

export default Index;
