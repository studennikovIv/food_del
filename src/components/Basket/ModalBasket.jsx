import { BACKDROP_DIV } from '../Menu/card/styled/ModalCard.styled';
import {
  BASKET_DIV,
  TOP_DIV,
  BASKET_H3,
  BOTTOM_DIV,
  TEXT_ARR_EMPTY_P,
  BUTTONE_CLOSE,
} from './styled/ModalBasket.styled';
export function ModalBasket({ basketArr, modalClose }) {
  console.log(basketArr);
  const closeButton = () => {
    modalClose(false);
  };
  return (
    <BACKDROP_DIV>
      <BASKET_DIV>
        <TOP_DIV>
          <BASKET_H3>Кошик</BASKET_H3>
          <BUTTONE_CLOSE onClick={closeButton}>X</BUTTONE_CLOSE>
        </TOP_DIV>
        <BOTTOM_DIV>
          {basketArr.length === 0 && (
            <TEXT_ARR_EMPTY_P>У вашому кошику порожньо!</TEXT_ARR_EMPTY_P>
          )}
          {basketArr &&
            basketArr.map(({ img, text, name }) => {
              return (
                <div>
                  <img src={img} alt={text} />
                  {name}
                </div>
              );
            })}
        </BOTTOM_DIV>
      </BASKET_DIV>
    </BACKDROP_DIV>
  );
}
