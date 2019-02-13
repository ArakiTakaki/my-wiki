import React from 'react';
import PropTypes from 'prop-types';
import s from './PulldownMenuStyle.scss';
import classNames from 'classnames';

class PulldownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen || false
    };
  }
  render() {
    const pulldownContentClasses = classNames({
      [s['pulldown-content']]: true,
      [s['-open']]: this.state.isOpen
    });
    return (
      <div>
        <div>
          title <span className={s['-open']} />
        </div>
        <div className={pulldownContentClasses}>{this.props.children}</div>
      </div>
    );
  }
}

PulldownMenu.propTypes = {
  //TODO props: PropTypes.string.isRequired
  children: PropTypes.node,
  isOpen: PropTypes.bool
};

export default PulldownMenu;
