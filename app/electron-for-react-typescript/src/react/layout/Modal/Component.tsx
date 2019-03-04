import React, { ReactComponentElement } from 'react';
import Style from './Style.sass';
import ButtonTypes, { IButton } from './ButtonComponent';

interface Props {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  footerType: 'single' | 'double' | 'none' | 'text';
  isOpen: boolean;
  primaryText: string;
  secondaryText?: string;
  onClickPrimary?(event: React.MouseEventHandler | void): void;
  onClickSecondary?(event: React.MouseEventHandler | void): void;
}
interface State {}
class Modal extends React.Component<Props, State> {
  public static defaultProps: Props = {
    isOpen: false,
    footerType: 'single',
    title: <div>Sample</div>,
    content: <div>sample content</div>,
    primaryText: 'OK',
    secondaryText: 'NG'
  };

  constructor(props: Props) {
    super(props);
  }

  public render() {
    if (!this.props.isOpen) {
      return <div />;
    }

    return (
      <div className={Style.root}>
        <div className={Style.content}>
          <header>
            {typeof this.props.title === 'string' ? (
              <h1>{this.props.title}</h1>
            ) : (
              <>{this.props.title}</>
            )}
          </header>
          <section>
            {typeof this.props.content === 'string' ? (
              <p>{this.props.content}</p>
            ) : (
              <>{this.props.content}</>
            )}
          </section>
          <footer className={Style.footerContent}>
            {this.props.footerType !== 'none' ? (
              <ButtonTypes
                isSingle={this.props.footerType === 'single'}
                primaryText={this.props.primaryText}
                secondaryText={this.props.secondaryText}
                onClickPrimary={this.props.onClickPrimary}
                onClickSecondary={this.props.onClickSecondary}
              />
            ) : null}
          </footer>
        </div>
      </div>
    );
  }
}

export default Modal;
