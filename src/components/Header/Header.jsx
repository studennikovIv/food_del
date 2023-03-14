import logo from './images/location-pin-svgrepo-com.svg';
import basket from './images/basket-free-material-svgrepo-com.svg';

import {
  STYLED_HEADER,
  CONTENT_DIV,
  LOGO_IMG,
  TITLE_H1,
  BASKET_BTN,
  BASKET_IMG,
} from './styled/Header.styled';

export function Header() {
  return (
    <STYLED_HEADER>
      <CONTENT_DIV>
        <LOGO_IMG src={logo} alt="logo" />
        <TITLE_H1>FOOD DELIVERY</TITLE_H1>
        <BASKET_BTN>
          <BASKET_IMG src={basket} alt="basket" />
        </BASKET_BTN>
      </CONTENT_DIV>
    </STYLED_HEADER>
  );
}
