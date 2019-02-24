import { observable, action } from 'mobx';

export type StorageType = {
  count: number;
  modalOpenAmount(props: ModalType);
  modalCloseAmount(props: ModalType);
};

interface ModalType {
  title: string;
  name: string;
  footer: string;
  type: 'ok' | 'ng';
}

class LayoutStorage {
  /* モーダルをオープンするかどうか */
  @observable public isOpenModal = false;

  /* モーダルの開閉イベント */
  @action.bound
  public modalOpenAmount(props: ModalType) {
    this.isOpenModal = true;
  }

  /* モーダルの開閉イベント */
  @action.bound
  public modalCloseAmount() {
    this.isOpenModal = false;
  }
}

export default LayoutStorage;
