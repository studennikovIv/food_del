import { useState } from 'react';
import {
  CardBasketWrap,
  CardImage,
  CardName,
  CardPrice,
  containerBtn,
  PlusBtn,
  MinusBtn,

} from '../styled/ModalBasket.styled';


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
      <СardName>{name}</СardName>
      <CardImage src={imagePath} alt={text} width="50px" />
      <div>
        <MinusBtn onClick={minusButton}>-</MinusBtn>
        <numberSpan>{valSpan}</numberSpan>
        <PlusBtn onClick={plusButton}>+</PlusBtn>
      </div>
      <CardPrice>{price}₴</CardPrice>
    </CardBasketWrap>
  );
}
