import { BACKDROP_DIV } from '../Menu/card/styled/ModalCard.styled';
import { CardBasket } from './card/BasketCard.jsx';
// import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  BASKET_DIV,
  TOP_DIV,
  BASKET_H3,
  BOTTOM_FORM,
  TEXT_ARR_EMPTY_P,
  BUTTONE_CLOSE,
  CONTEINER_SUM_DIV,
  SUM_P,
  DELIVERY_P,
  CONTEINER_BTN_DIV,
  LEFT_BUTTON,
  RIGHT_BUTTON,
} from './styled/ModalBasket.styled';

export function ModalBasket({ basketArr, modalClose }) {
  // const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   let sum = 0;
  //   basketArr.map(({ price }) => {
  //     console.log(price);
  //     return (sum = sum + price);
  //   });
  //   setTotalSum(sum);
  // }, [basketArr, totalSum]);

  const closeButton = () => {
    modalClose(false);
  };

  let totalNumders = 0;
  const totalSum = num => {
    return (totalNumders += num);
  };

  return (
    <BACKDROP_DIV>
      <BASKET_DIV>
        <TOP_DIV>
          <BASKET_H3>Кошик</BASKET_H3>
          <BUTTONE_CLOSE onClick={closeButton}>×</BUTTONE_CLOSE>
        </TOP_DIV>
        <BOTTOM_FORM
          typeof="submit"
          onClick={ev => {
            ev.preventDefault();
          }}
        >
          {basketArr.length === 0 && (
            <TEXT_ARR_EMPTY_P>У вашому кошику порожньо!</TEXT_ARR_EMPTY_P>
          )}
          {basketArr &&
            basketArr.map(obj => (
              <CardBasket key={nanoid()} basketArr={obj} funcSum={totalSum} />
            ))}
          {/* <CardBasket basketArr={basketArr} /> */}
          {basketArr.length !== 0 && (
            <>
              <CONTEINER_SUM_DIV>
                <SUM_P>Сумма:{totalNumders}</SUM_P>
                <DELIVERY_P>Доставка:50грн</DELIVERY_P>
                <SUM_P>До сплати:{totalNumders + 50}</SUM_P>
              </CONTEINER_SUM_DIV>
              <CONTEINER_BTN_DIV>
                <LEFT_BUTTON>Продовжіти покупки</LEFT_BUTTON>
                <RIGHT_BUTTON>Оформити замовлення</RIGHT_BUTTON>
              </CONTEINER_BTN_DIV>
            </>
          )}
        </BOTTOM_FORM>
      </BASKET_DIV>
    </BACKDROP_DIV>
  );
}
