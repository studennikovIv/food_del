import { useState } from 'react';

import {
  CARD_BASKET_DIV,
  CONTEINER_CARD_BASKET_DIV,
  CARD_IMG,
  CARD_NAME_P,
  CARD_PRICE_P,
  CONTEINER_BTN,
  BUTTON_PLUS,
  BUTTON_MINUS,
  NUMBER_SPAN,
} from '../styled/ModalBasket.styled';

export function CardBasket({ basketArr }) {
  const [span, setSpan] = useState(1);

  const plusButton = () => {
    setSpan(span + 1);
  };
  const minusButton = () => {
    if (span >= 0) {
      setSpan(span - 1);
    }
  };
  return (
    <CONTEINER_CARD_BASKET_DIV>
      {basketArr.map(({ img, text, name, price }) => {
        return (
          <CARD_BASKET_DIV key={name}>
            <CARD_NAME_P>{name}</CARD_NAME_P>
            <CARD_IMG src={img} alt={text} width="50px" />

            <CONTEINER_BTN>
              <BUTTON_MINUS onClick={minusButton}>-</BUTTON_MINUS>
              <NUMBER_SPAN>{span}</NUMBER_SPAN>
              <BUTTON_PLUS onClick={plusButton}>+</BUTTON_PLUS>
            </CONTEINER_BTN>
            <CARD_PRICE_P>{price}₴</CARD_PRICE_P>
          </CARD_BASKET_DIV>
        );
      })}
    </CONTEINER_CARD_BASKET_DIV>
  );
}
