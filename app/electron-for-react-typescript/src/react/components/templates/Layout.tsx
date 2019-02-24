import React from 'react';
import * as mobx from 'mobx-react';
import * as styles from './Layout.sass';

interface Props {
  children?: React.ComponentElement<any, any>;
}
interface State {}
@mobx.inject('layout')
@mobx.observer
class Layout extends React.Component<Props, State> {
  public render() {
    return (
      <div>
        <div className={styles.root}>test</div>
        <h1>fuckyoasdfu</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
