import { makeAutoObservable } from 'mobx';

class Basket {
  arr = [];
  constructor() {
    makeAutoObservable(this);
  }

  basketArrAdd(img: any, name: string, price: number, text: string) {
    this.arr.push({ img, name, price, text });
    // console.log(this.arr.map(obj => ({ ...obj })));
  }
}

export default Basket;
