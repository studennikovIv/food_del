import { BACKDROP_DIV } from '../Menu/card/styled/ModalCard.styled';
import { CardBasket } from './card/BasketCard.jsx';
import { useEffect, useState } from 'react';
import {
  BASKET_DIV,
  TOP_DIV,
  BASKET_H3,
  BOTTOM_FORM,
  TEXT_ARR_EMPTY_P,
  BUTTONE_CLOSE,
} from './styled/ModalBasket.styled';

export function ModalBasket({ basketArr, modalClose }) {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    let sum = 0;
    basketArr.map(({ price }) => {
      return (sum = sum + price);
    });
    setTotalSum(sum);
  }, [basketArr, totalSum]);

  const closeButton = () => {
    modalClose(false);
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
            console.log(ev.currentTarget.textContent);
          }}
        >
          {basketArr.length === 0 && (
            <TEXT_ARR_EMPTY_P>У вашому кошику порожньо!</TEXT_ARR_EMPTY_P>
          )}
          {basketArr && <CardBasket basketArr={basketArr} />}

          {basketArr.length !== 0 && (
            <div>
              <p>До сплати :{totalSum}</p>

              <label htmlFor="tel">
                Ваш телефон
                <input type="tel" htmlFor="tel" />
              </label>
              <button type="submit">Замовити</button>
            </div>
          )}
        </BOTTOM_FORM>
      </BASKET_DIV>
    </BACKDROP_DIV>
  );
}
