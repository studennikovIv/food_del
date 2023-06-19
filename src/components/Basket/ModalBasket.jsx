import { BACKDROP_DIV } from '../Menu/card/styled/ModalCard.styled';
import { CardBasket } from './card/BasketCard.jsx';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BasketFormClient } from './card/BasketFormClient';

import {
  basketDiv,
  topDiv,
  basketH3,
  bottomDiv,
  textArrEmptyP,
  buttonClose,
  containerSumDiv,
  sumP,
  deliveryP,
  containerBtnDiv,
  leftButton,
  rightButton,
  containerBottom,
  containerCard,
} from './styled/ModalBasket.styled';

export function ModalBasket({ plus, minus, basketArr, modalClose, reset }) {
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
      <basketDiv>
        <topDiv>
          <basketH3>Кошик</basketH3>
          <buttonClose onClick={closeButton}>×</buttonClose>
        </topDiv>
        <bottomDiv className={basketFormClient === true && 'active'}>
          <containerCard
            className={basketFormClient === true ? 'active' : 'false'}
          >
            {basketArr.length === 0 && (
              <textArrEmptyP>У вашому кошику порожньо!</textArrEmptyP>
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
          </containerCard>
          {basketFormClient === false && basketArr.length !== 0 && (
            <>
              <containerBottom>
                <containerSumDiv>
                  <sumP>Сумма:{total}</sumP>
                  <deliveryP>Доставка:50грн</deliveryP>
                  <sumP>До сплати:{total + 50}</sumP>
                </containerSumDiv>
                <containerBtnDiv>
                  <leftButton onClick={closeButton}>
                    Продовжіти покупки
                  </leftButton>
                  <rightButton onClick={clickBtn}>
                    Оформити замовлення
                  </rightButton>
                </containerBtnDiv>
              </containerBottom>
            </>
          )}
        </bottomDiv>
      </basketDiv>
    </BACKDROP_DIV>
  );
}
