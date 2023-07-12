import { useState } from 'react';
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../store/index';

import {
  CardBasketWrap,
  CardImage,
  CardName,
  CardPrice,
  PlusBtn,
  MinusBtn,
} from '../styled/ModalBasket.styled.jsx';

export const CardBasket = observer(({ arr, minus, basketArr, plus }) => {
  const { BasketButtonSpan, Basket } = useStore();

  const { img, text, name, price, span } = basketArr;

  const [valSpan] = useState(span);
  const imagePath = require(`../../MenuAllBookmarks/${img}`);

  const plusButton = () => {
    plus(basketArr);
  };

  const minusButton = () => {
    if (valSpan === 0) {
      return;
    }
    minus(basketArr);
  };

  return (
    <CardBasketWrap>
      <CardName>{name}</CardName>
      <CardImage src={imagePath} alt={text} width="50px" />
      <div>
        <MinusBtn onClick={() => BasketButtonSpan.minusValue(1)}>-</MinusBtn>
        <span>{BasketButtonSpan.total}</span>
        <PlusBtn onClick={() => BasketButtonSpan.plusValue(1)}>+</PlusBtn>
      </div>
      <CardPrice>{price}₴</CardPrice>
    </CardBasketWrap>
  );
});
