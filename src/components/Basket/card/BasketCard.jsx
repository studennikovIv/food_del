import { useState } from 'react';
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '@/store/index.jsx';

import {
  CardBasketWrap,
  CardImage,
  CardName,
  CardPrice,
  ContainerBtn,
  PlusBtn,
  MinusBtn,
} from '../styled/ModalBasket.styled.jsx';

export const CardBasket = observer(({ arr, minus, basketArr, plus }) => {
  const { basketStore } = useStore();
  const { total } = basketStore;
  const { img, text, name, price, span } = basketArr;
  const [valSpan] = useState(span);
  const imagePath = require(`../../MenuAllBookmarks/${img}`);

  console.log(total);
  const plusButton = () => {
    // console.log(secondsPassed);
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
        <MinusBtn onClick={() => basketStore.minusValue(1)}>-</MinusBtn>
        <span>{span}</span>
        <PlusBtn onClick={() => basketStore.plusValue(1)}>+</PlusBtn>
      </div>
      <CardPrice>{price}₴</CardPrice>
    </CardBasketWrap>
  );
});
