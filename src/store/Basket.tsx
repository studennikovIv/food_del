import { makeAutoObservable } from 'mobx';

class Basket {
  arr = [];

  total = this.arr
    .map(arr => ({ ...arr }))
    .reduce((acc, p) => acc + p.price * p.span, 0);
  constructor() {
    makeAutoObservable(this);
  }

  basketArrAdd(
    img: any,
    name: string,
    price: number,
    text: string,
    span: number
  ) {
    this.arr.push({ img, name, price, text, span });

    console.log(this.total);
  }
}

export default Basket;
