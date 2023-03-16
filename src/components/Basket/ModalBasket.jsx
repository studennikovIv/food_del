import { BACKDROP_DIV } from '../Menu/card/styled/ModalCard.styled';
import {
  BASKET_DIV,
  TOP_DIV,
  BASKET_H3,
  BOTTOM_FORM,
  TEXT_ARR_EMPTY_P,
  BUTTONE_CLOSE,
} from './styled/ModalBasket.styled';

export function ModalBasket({ basketArr, modalClose }) {
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
            console.log(ev.currentTarget.textContent);
          }}
        >
          {basketArr.length === 0 && (
            <TEXT_ARR_EMPTY_P>У вашому кошику порожньо!</TEXT_ARR_EMPTY_P>
          )}
          {basketArr &&
            basketArr.map(({ img, text, name, price }) => {
              return (
                <div key={name}>
                  <img src={img} alt={text} width="50px" />
                  <p>{name}</p>
                  <p>{price}</p>
                </div>
              );
            })}
          {basketArr && <p>До сплати :</p>}
          {basketArr.length !== 0 && (
            <div>
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
