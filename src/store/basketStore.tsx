const { makeAutoObservable } = require('mobx');

class BasketStore {
  total = 1;
  constructor() {
    makeAutoObservable(this);
  }
  plusValue(value: number) {
    this.total += value;
  }
  minusValue(value: number) {
    this.total -= value;
  }
}

export default new BasketStore();
