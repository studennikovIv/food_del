import { BACKDROP_DIV } from '../Menu/card/styled/ModalCard.styled';
import { CardBasket } from './card/BasketCard.jsx';
// import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BasketFormClient } from './card/BasketFormClient';

import {
  BASKET_DIV,
  TOP_DIV,
  BASKET_H3,
  BOTTOM_DIV,
  TEXT_ARR_EMPTY_P,
  BUTTONE_CLOSE,
  CONTEINER_SUM_DIV,
  SUM_P,
  DELIVERY_P,
  CONTEINER_BTN_DIV,
  LEFT_BUTTON,
  RIGHT_BUTTON,
} from './styled/ModalBasket.styled';

export function ModalBasket({ plus, minus, basketArr, modalClose }) {
  // const [message, setMessage] = useState('');
  const closeButton = () => {
    modalClose(false);
  };

  const total = basketArr.reduce((acc, p) => acc + p.price * p.span, 0);

  return (
    <BACKDROP_DIV>
      <BASKET_DIV>
        <TOP_DIV>
          <BASKET_H3>Кошик</BASKET_H3>
          <BUTTONE_CLOSE onClick={closeButton}>×</BUTTONE_CLOSE>
        </TOP_DIV>
        <BOTTOM_DIV>
          {basketArr.length === 0 && (
            <TEXT_ARR_EMPTY_P>У вашому кошику порожньо!</TEXT_ARR_EMPTY_P>
          )}
          {basketArr &&
            basketArr.map(obj => (
              <CardBasket
                key={nanoid()}
                plus={plus}
                basketArr={obj}
                minus={minus}
                arr={basketArr}
              />
            ))}
          {/* <CardBasket basketArr={basketArr} /> */}
          {basketArr.length !== 0 && (
            <>
              <CONTEINER_SUM_DIV>
                <SUM_P>Сумма:{total}</SUM_P>
                <DELIVERY_P>Доставка:50грн</DELIVERY_P>
                <SUM_P>До сплати:{total + 50}</SUM_P>
              </CONTEINER_SUM_DIV>
              <CONTEINER_BTN_DIV>
                <LEFT_BUTTON>Продовжіти покупки</LEFT_BUTTON>
                <RIGHT_BUTTON>Оформити замовлення</RIGHT_BUTTON>
              </CONTEINER_BTN_DIV>
            </>
          )}
          <BasketFormClient prop={basketArr} total={total} />
        </BOTTOM_DIV>
      </BASKET_DIV>
    </BACKDROP_DIV>
  );
}