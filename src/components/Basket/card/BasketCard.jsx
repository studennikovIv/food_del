// import { useState } from 'react';
import { useEffect, useState } from 'react';
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

export function CardBasket({ basketArr, funcSum }) {
  const { img, text, name, price, span } = basketArr;
  const [valSpan, setValSpan] = useState(span);

  useEffect(() => {
    funcSum(price * valSpan);
  }, [valSpan, funcSum, price]);

  const plusButton = () => {
    setValSpan(valSpan + 1);
  };

  const minusButton = () => {
    if (valSpan === 1) {
      return;
    }
    setValSpan(valSpan - 1);
  };
  return (
    // <CONTEINER_CARD_BASKET_DIV>
    //   {basketArr.map(({ img, text, name, price, span }) => {
    // return (
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
  //   })}
  // </CONTEINER_CARD_BASKET_DIV>
  // );
}
