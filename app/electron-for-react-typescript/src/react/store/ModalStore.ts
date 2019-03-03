import { observable, action } from 'mobx';

export type ModalType = {
  show: boolean;
  message: string;
  title: string;
  onShowEvent(): void;
  onCloseEvent(): void;
};

class ModalStore {
  @observable
  public show = true;

  @observable
  public message = 'test';

  @observable
  public title = 'title';

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
