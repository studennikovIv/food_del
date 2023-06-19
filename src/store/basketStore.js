const { makeAutoObservable } = require('mobx');

class BasketStore {
  constructor() {
    makeAutoObservable(this);
  }
}
