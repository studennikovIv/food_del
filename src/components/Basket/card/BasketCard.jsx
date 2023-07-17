import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/index';

import {
  CardBasketWrap,
  CardImage,
  CardName,
  CardPrice,
  PlusBtn,
  MinusBtn,
} from '../styled/ModalBasket.styled.jsx';

export const CardBasket = observer(({ basketArr }) => {
  const { basketStore } = useStore();
  const { img, text, name, price, span } = basketArr;

  const imagePath = require(`../../MenuAllBookmarks/${img}`);

  const plusButton = () => {
    basketStore.handleAdd(basketArr);
  };

  const minusButton = () => {
    basketStore.handleRemove(basketArr);
  };

  return (
    <CardBasketWrap>
      <CardName>{name}</CardName>
      <CardImage src={imagePath} alt={text} width="50px" />
      <div>
        <MinusBtn onClick={minusButton}>-</MinusBtn>
        <span>{span}</span>
        <PlusBtn onClick={plusButton}>+</PlusBtn>
      </div>
      <CardPrice>{price}₴</CardPrice>
    </CardBasketWrap>
  );
});
