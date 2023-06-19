import { useState } from 'react';
import {
  cardBasketDiv,
  cardImg,
  cardNameP,
  cardPriceP,
  containerBtn,
  buttonPlus,
  buttonMinus,
  numberSpan,
} from '../styled/ModalBasket.styled';

export function CardBasket({ arr, minus, basketArr, plus }) {
  const { img, text, name, price, span } = basketArr;
  const [valSpan] = useState(span);

  const plusButton = () => {
    plus(basketArr);
  };

  const minusButton = () => {
    if (valSpan === 0) {
      return;
    }
    minus(basketArr);
  };
  const imagePath = require(`../../MenuAllBookmarks/${img}`);
  return (
    <cardBasketDiv>
      <cardNameP>{name}</cardNameP>
      <cardImg src={imagePath} alt={text} width="50px" />

      <containerBtnDiv>
        <buttonMinus onClick={minusButton}>-</buttonMinus>
        <numberSpan>{valSpan}</numberSpan>
        <buttonPlus onClick={plusButton}>+</buttonPlus>
      </containerBtnDiv>
      <cardPriceP>{price}₴</cardPriceP>
    </cardBasketDiv>
  );
}
