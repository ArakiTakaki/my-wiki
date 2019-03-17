import React from 'react';
import Style from './Style.sass';

const item_list = ['manda', 'ceno', 'nippon', 'aiufdsaf', 'other'];

interface Props {
  children?: any;
}
const SideBar = (props: Props) => {
  return (
    <div className={Style.root}>
      <div>
        <h1 className={Style.content_title}>EC Package</h1>
        <ul className={Style.content_list}>
          {item_list.map((item) => (
            <li className={Style.content}>
              <div>#&nbsp;&nbsp;{item}</div>
              <div className={Style.notification}>1</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
