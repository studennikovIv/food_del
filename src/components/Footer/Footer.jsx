import { ReactComponent as Bike } from './svg/bike-svgrepo-com (1).svg';
import { ReactComponent as Instagram } from './svg/instagram-1-svgrepo-com.svg';
import { ReactComponent as Facebook } from './svg/facebook-color-svgrepo-com.svg';
import { ReactComponent as Telegramm } from './svg/telegram-svgrepo-com.svg';
import {
  STYLED_FOOTER,
  CONTENT_DIV,
  INFO_UL,
  CONTACT_UL,
  CONTACTS_TEXT_P,
  CONTACTS_TEXT_P_BOLD,
} from './styled/Footer.styled';

export function Footer() {
  return (
    <STYLED_FOOTER>
      <CONTENT_DIV>
        <INFO_UL>
          <li>
            <CONTACTS_TEXT_P_BOLD> 8:00 - 21:00</CONTACTS_TEXT_P_BOLD>
            <Bike />
          </li>
          <li>
            <CONTACTS_TEXT_P>+380992121234</CONTACTS_TEXT_P>
          </li>
          <li>
            <a href="/">
              <p>food-del@gmail.com</p>
            </a>
          </li>
        </INFO_UL>
        <CONTACT_UL>
          <li>
            <a href="/">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="/">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="/">
              <Telegramm />
            </a>
          </li>
        </CONTACT_UL>
      </CONTENT_DIV>
      <CONTACTS_TEXT_P>© 2023. Food Delivery.</CONTACTS_TEXT_P>
    </STYLED_FOOTER>
  );
}
