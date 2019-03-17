import React from 'react';
import { StorageType } from '../store/Storage';
import Modal from '../layout/Modal/Component';
import { inject, observer } from 'mobx-react';
import SideBar from '../layout/SideBar/Component';
import { hot } from 'react-hot-loader';

interface Props {
  children?: any;
  storage?: StorageType;
}
interface State {
  isModalOpen: boolean;
}

@inject('storage')
@observer
@hot(module)
class Index extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.modalCloseEvent = this.modalCloseEvent.bind(this);
    this.modalOpenEvent = this.modalOpenEvent.bind(this);
    this.state = {
      isModalOpen: false
    };
  }

  public modalCloseEvent() {
    this.setState({ isModalOpen: false });
  }
  public modalOpenEvent() {
    this.setState({ isModalOpen: true });
  }

  public render() {
    if (this.props.storage == null) return null;

    return (
      <div>
        <div>
          <p>testAiasdfdsaueo</p>
          <p>testAiasdfdsaueo</p>
          <p>testAiasdfdsaueo</p>
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
        <SideBar />
      </div>
    );
  }
}

export default Index;
