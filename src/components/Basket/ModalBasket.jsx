import { BACKDROP_DIV } from '../Menu/card/styled/ModalCard.styled';
import { BASKET_DIV, TOP_DIV, BASKET_H3 } from './styled/ModalBasket.styled';
export function ModalBasket() {
  return (
    <BACKDROP_DIV>
      <BASKET_DIV>
        <TOP_DIV>
          <BASKET_H3>Кошик</BASKET_H3>
        </TOP_DIV>
      </BASKET_DIV>
    </BACKDROP_DIV>
  );
}
