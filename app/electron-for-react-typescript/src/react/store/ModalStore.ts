import * as React from 'react';
import { ModalType } from './ModalStore';
import { observable, action } from 'mobx';

export type ModalType = {
  show: boolean;
  content: string;
  title: string;
  footer: string;
  onShowEvent(): void;
  onCloseEvent(): void;
};

class ModalStore {
  @observable
  public show = true;

  @observable
  public content = 'test';

  @observable
  public title = 'title';

  @observable
  public footer = 'footer';

  @action.bound
  public onShowEvent() {
    this.show = true;
  }

  @action.bound
  public onCloseEvent() {
    this.show = false;
  }
}

export default ModalStore;
