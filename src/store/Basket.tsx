import { makeAutoObservable, computed } from 'mobx';

class Basket {
  private _bItems = [];

  get getBasketItems() {
    return this._bItems;
  }

  sum = 0;

  constructor() {
    makeAutoObservable(this);
  }

  basketArrAdd(img, name, price, text, span) {
    this._bItems.push({ img, name, price, text, span });
    this.sum = this.calculateTotal();
  }

  calculateTotal() {
    return this._bItems
      .map(arr => ({ ...arr }))
      .reduce((acc, p) => acc + p.price * p.span, 0);
  }
}

export default Basket;
