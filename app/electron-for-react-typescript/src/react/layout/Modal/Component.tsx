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
          <header>{modal.title}</header>
          <section>
            <p>よろです</p>
            <p>{modal.content}</p>
            <p>{modal.content}</p>
            <p>{modal.content}</p>
            <p>{modal.content}</p>
            <p>てすと</p>
          </section>
          <footer className={Style.footerContent}>
            <button className={Style.left}>Prev</button>

            <button className={Style.right}>Next</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Modal;
