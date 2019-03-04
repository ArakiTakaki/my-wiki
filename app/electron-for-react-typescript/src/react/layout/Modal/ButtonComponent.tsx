import React, { useCallback } from 'react';
import Style from './Style.sass';

const rippleMiddleware = (event) => {
  return event;
};

export interface IButton {
  isSingle: boolean;
  primaryText: string;
  secondaryText?: string;
  onClickPrimary?(event: React.MouseEventHandler | void): void;
  onClickSecondary?(event: React.MouseEventHandler | void): void;
}
const ButtonTypes = (props: IButton) => {
  // middleware
  const onClickPrimary = useCallback(
    (event) => {
      if (props.onClickPrimary == null) {
        return;
      }
      props.onClickPrimary(event);
    },
    [props.onClickPrimary]
  );
  const onClickSecondary = useCallback(
    (event) => {
      if (props.onClickSecondary == null) {
        return;
      }
      props.onClickSecondary(event);
    },
    [props.onClickSecondary]
  );

  return (
    <>
      {props.isSingle ? null : (
        <button className={Style.right} onClick={onClickSecondary}>
          {props.secondaryText}
        </button>
      )}
      <button className={Style.left} onClick={onClickPrimary}>
        {props.primaryText}
      </button>
    </>
  );
};

export default ButtonTypes;
