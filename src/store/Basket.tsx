import { makeAutoObservable, computed } from 'mobx';

class Basket {
  arr = [];
  sum = 0;

  constructor() {
    makeAutoObservable(this);
  }

  basketArrAdd(img, name, price, text, span) {
    this.arr.push({ img, name, price, text, span });
    this.sum = this.calculateTotal();
  }

  calculateTotal() {
    return this.arr
      .map(arr => ({ ...arr }))
      .reduce((acc, p) => acc + p.price * p.span, 0);
  }
}

export default Basket;
