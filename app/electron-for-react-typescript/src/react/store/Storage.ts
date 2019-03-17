import { observable, action } from 'mobx';

export type StorageType = {
  githubToken: string;
  asanaToken: string;
};

class Storage {
  @observable public githubToken: string = '';
  @observable public asanaToken: string = '';

  @action.bound
  public setAsanaToken(token) {
    this.asanaToken = token;
  }

  @action.bound
  public getAsanaToken() {
    return this.asanaToken;
  }

  @action.bound
  public setGithubToken(token) {
    this.githubToken = token;
  }

  @action.bound
  public getGithubToken() {
    return this.githubToken;
  }
}

export default Storage;
