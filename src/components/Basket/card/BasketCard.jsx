// import { useState } from 'react';
import { useState } from 'react';
import {
  CARD_BASKET_DIV,
  // CONTEINER_CARD_BASKET_DIV,
  CARD_IMG,
  CARD_NAME_P,
  CARD_PRICE_P,
  CONTEINER_BTN,
  BUTTON_PLUS,
  BUTTON_MINUS,
  NUMBER_SPAN,
} from '../styled/ModalBasket.styled';

export function CardBasket({ arr, minus, basketArr, plus }) {
  const { img, text, name, price, span } = basketArr;
  const [valSpan] = useState(span);

  const plusButton = () => {
    plus(basketArr);
  };

  const minusButton = () => {
    if (valSpan === 1) {
      return;
    }
    minus(basketArr);
  };

  return (
    <CARD_BASKET_DIV>
      <CARD_NAME_P>{name}</CARD_NAME_P>
      <CARD_IMG src={img} alt={text} width="50px" />

      <CONTEINER_BTN>
        <BUTTON_MINUS onClick={minusButton}>-</BUTTON_MINUS>
        <NUMBER_SPAN>{valSpan}</NUMBER_SPAN>
        <BUTTON_PLUS onClick={plusButton}>+</BUTTON_PLUS>
      </CONTEINER_BTN>
      <CARD_PRICE_P>{price}₴</CARD_PRICE_P>
    </CARD_BASKET_DIV>
  );
}
