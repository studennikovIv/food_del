import { BACKDROP_DIV } from '../Menu/card/styled/ModalCard.styled';
import { CardBasket } from './card/BasketCard.jsx';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BasketFormClient } from './card/BasketFormClient';

import {
  BasketWrapper,
  TopWrapper,
  BasketTitle,
  BottomWrapper,
  EmptyMessage,
  CloseBtn,
  SumWrapper,
  BtnWrapper,
  LeftButton,
  BasketDropWrapper,
  RightButton,
  BottomContainer,
  CardContainer,
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
    <BasketDropWrapper>
      <BasketWrapper>
        <TopWrapper>
          <BasketTitle>Кошик</BasketTitle>
          <CloseBtn onClick={closeButton}>×</CloseBtn>
        </TopWrapper>
        <BottomContainer className={basketFormClient === true && 'active'}>
          <CardContainer
            className={basketFormClient === true ? 'active' : 'false'}
          >
            {basketArr.length === 0 ? (
              <EmptyMessage>У вашому кошику порожньо!</EmptyMessage>
            ) : null}

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
          </CardContainer>
          {basketFormClient === false && basketArr.length !== 0 && (
            <>
              <BottomContainer>
                <SumWrapper>
                  <p>Сумма:{total}</p>
                  <p>Доставка:50грн</p>
                  <p>До сплати:{total + 50}</p>
                </SumWrapper>
                <BtnWrapper>
                  <LeftButton onClick={closeButton}>
                    Продовжіти покупки
                  </LeftButton>
                  <RightButton onClick={clickBtn}>
                    Оформити замовлення
                  </RightButton>
                </BtnWrapper>
              </BottomContainer>
            </>
          )}
        </BottomContainer>
      </BasketWrapper>
    </BasketDropWrapper>
  );
}
