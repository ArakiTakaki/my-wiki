import { observable, action } from 'mobx';

class Storage {
  @observable param = 'ストアに繋がってるよ';
  @observable value = { count: 1 };

  @action.bound setParam(value) {
    this.param = value;
  }
  @action.bound setCount(value) {
    this.value.count = value;
  }
}
const storage = new Storage();
export default storage;
