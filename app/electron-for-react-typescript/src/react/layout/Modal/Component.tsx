import React, { ReactComponentElement } from 'react';
import Style from './Style.sass';
import { inject, observer } from 'mobx-react';
import { ModalType } from '@/react/store/ModalStore';

interface Props {
  children?: any;
  modal?: ModalType;
}
interface State {}

@inject('modal')
@observer
class Modal extends React.Component<Props, State> {
  public render() {
    const { modal } = this.props;
    if (modal == null || !modal.show) {
      return <div />;
    }

    return (
      <div className={Style.root}>
        <div className={Style.content}>
          <h1>{modal.title}</h1>
          <p>{modal.message}</p>
        </div>
      </div>
    );
  }
}

export default Modal;
