import * as Mobx from 'mobx';

export type StorageType = {
  count: number;
  incrementAmount(): void;
  decrementAmount(): void;
};

class Storage {
  @Mobx.observable
  public count: number = 0;

  @Mobx.action.bound
  public incrementAmount() {
    this.count += 1;
  }

  @Mobx.action.bound
  public decrementAmount() {
    this.count -= 1;
  }
}

export default Storage;
