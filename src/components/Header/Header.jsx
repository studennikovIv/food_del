import { Link } from 'react-router-dom';

// import logo from './images/location-pin-svgrepo-com.svg';
import logo from './images/logo.jpg';
// import basket from './images/basket-free-material-svgrepo-com.svg';
import basket from './images/1.jpg';

import {
  STYLED_HEADER,
  CONTENT_DIV,
  LOGO_IMG,
  TITLE_H1,
  BASKET_BTN,
  BASKET_IMG,
  TITLE_P,
  TITLE_CONTEINER_DIV,
} from './styled/Header.styled';

export function Header({ openBusket }) {
  const clickBusket = () => {
    openBusket(true);
  };

  return (
    <STYLED_HEADER>
      <CONTENT_DIV>
        <Link to="/">
          <LOGO_IMG src={logo} alt="logo" />
        </Link>
        <TITLE_CONTEINER_DIV>
          <TITLE_H1 to="/">FOOD DELIVERY</TITLE_H1>
          <TITLE_P to="/">Швидка доставка у твоєму Місті!</TITLE_P>
        </TITLE_CONTEINER_DIV>
        <BASKET_BTN onClick={clickBusket}>
          <BASKET_IMG src={basket} alt="basket" />
        </BASKET_BTN>
      </CONTENT_DIV>
    </STYLED_HEADER>
  );
}
