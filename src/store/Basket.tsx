import { makeAutoObservable, computed } from 'mobx';

class Basket {
  private _bItems = [];

  get getBasketItems() {
    return this._bItems;
  }
  @computed get sum() {
    return this.calculateTotal();
  }
  constructor() {
    makeAutoObservable(this);
  }

  basketArrAdd(
    img: string,
    name: string,
    price: number,
    text: string,
    span: number
  ) {
    const existingProductIndex = this._bItems.findIndex(p => p.name === name);
    if (existingProductIndex !== -1) {
      // Элемент уже существует в массиве
      this._bItems[existingProductIndex].span += 1; // Увеличиваем span на 1
    } else {
      // Элемент не найден в массиве, добавляем новый элемент
      this._bItems.push({ img, name, price, text, span });
    }
  }

  calculateTotal() {
    return this._bItems.reduce((acc, p) => acc + p.price * p.span, 0);
  }

  handleAdd = obj => {
    const existingProduct = this._bItems.find(p => p.name === obj.name);
    if (existingProduct) {
      this._bItems = this._bItems.map(p => {
        if (p.name === obj.name) {
          return { ...p, span: p.span + 1 };
        } else {
          return p;
        }
      });
    } else {
      this._bItems = [...this._bItems, { ...obj, span: 1 }];
    }
  };

  handleRemove = obj => {
    const existingProduct = this._bItems.find(p => p.name === obj.name);
    if (existingProduct.span === 1) {
      this._bItems = this._bItems.filter(p => p.name !== obj.name);
    } else {
      this._bItems = this._bItems.map(p => {
        if (p.name === obj.name) {
          return { ...p, span: p.span - 1 };
        } else {
          return p;
        }
      });
    }
  };
}

export default Basket;
