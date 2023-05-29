import { BACKDROP_DIV } from '../Menu/card/styled/ModalCard.styled';
import { CardBasket } from './card/BasketCard.jsx';
import { useState } from 'react';
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
  CONTEINER_BOTTOM,
  CONTEINER_CARD,
} from './styled/ModalBasket.styled';

export function ModalBasket({ plus, minus, basketArr, modalClose, reset }) {
  // const [message, setMessage] = useState('');
  const [basketFormClient, setBasketFormClient] = useState(false);

  const closeButton = () => {
    modalClose(false);
  };
  const clickBtn = () => {
    if (basketFormClient === false) {
      setBasketFormClient(true);
    } else {
      console.log('asdasd');
    }
  };

  const total = basketArr.reduce((acc, p) => acc + p.price * p.span, 0);

  return (
    <BACKDROP_DIV>
      <BASKET_DIV>
        <TOP_DIV>
          <BASKET_H3>Кошик</BASKET_H3>
          <BUTTONE_CLOSE onClick={closeButton}>×</BUTTONE_CLOSE>
        </TOP_DIV>
        <BOTTOM_DIV className={basketFormClient === true && 'active'}>
          <CONTEINER_CARD
            className={basketFormClient === true ? 'active' : 'false'}
          >
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

            {basketArr.length !== 0 && (
              <>
                {basketFormClient === true && (
                  <BasketFormClient
                    food={basketArr}
                    total={total}
                    resetBasket={reset}
                    basketFormClient={setBasketFormClient}
                  />
                )}
              </>
            )}
          </CONTEINER_CARD>
          {basketFormClient === false && basketArr.length !== 0 && (
            <>
              <CONTEINER_BOTTOM>
                <CONTEINER_SUM_DIV>
                  <SUM_P>Сумма:{total}</SUM_P>
                  <DELIVERY_P>Доставка:50грн</DELIVERY_P>
                  <SUM_P>До сплати:{total + 50}</SUM_P>
                </CONTEINER_SUM_DIV>
                <CONTEINER_BTN_DIV>
                  <LEFT_BUTTON onClick={closeButton}>
                    Продовжіти покупки
                  </LEFT_BUTTON>
                  <RIGHT_BUTTON onClick={clickBtn}>
                    Оформити замовлення
                  </RIGHT_BUTTON>
                </CONTEINER_BTN_DIV>
              </CONTEINER_BOTTOM>
            </>
          )}
        </BOTTOM_DIV>
      </BASKET_DIV>
    </BACKDROP_DIV>
  );
}
