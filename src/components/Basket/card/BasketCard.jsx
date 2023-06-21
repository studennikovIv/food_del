import { useState } from 'react';
import {
  CardBasketWrap,
  CardImage,
  CardName,
  CardPrice,
  ContainerBtn,
  PlusBtn,
  MinusBtn,
} from '../styled/ModalBasket.styled.jsx';

export function CardBasket({ arr, minus, basketArr, plus }) {
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
        <MinusBtn onClick={minusButton}>-</MinusBtn>
        <span>{valSpan}</span>
        <PlusBtn onClick={plusButton}>+</PlusBtn>
      </div>
      <CardPrice>{price}₴</CardPrice>
    </CardBasketWrap>
  );
}
