const { makeAutoObservable } = require('mobx');

class BasketButtonSpan {
  total = 1;
  constructor() {
    makeAutoObservable(this);
  }

  plusValue(value: number) {
    this.total += value;
    console.log(this.total);
  }
  minusValue(value: number) {
    if (this.total === 1) {
      return;
    }
    this.total -= value;
  }
}

export default BasketButtonSpan;
