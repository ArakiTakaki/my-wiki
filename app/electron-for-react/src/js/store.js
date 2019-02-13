import { observable, action } from 'mobx';

class Store {
  @observable param = '';

  @action.bound setParam(value) {
    this.param = value;
  }
}

export default Store;
