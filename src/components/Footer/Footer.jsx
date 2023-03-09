import {
  STYLED_FOOTER,
  CONTENT_DIV,
  TITLE_H1,
  CONTACTS_UL,
  CONTACTS_TEXT_P,
} from './styled/Footer.styled';

export function Footer() {
  return (
    <STYLED_FOOTER>
      <TITLE_H1>FAST AND QUALITY</TITLE_H1>
      <CONTENT_DIV>
        <CONTACTS_UL>
          <li>
            <CONTACTS_TEXT_P>з 8:00 дo 21:00</CONTACTS_TEXT_P>
          </li>
          <li>
            <CONTACTS_TEXT_P>+380992121234</CONTACTS_TEXT_P>
          </li>
          <li>
            <CONTACTS_TEXT_P>food-del@gmail.com</CONTACTS_TEXT_P>
          </li>
        </CONTACTS_UL>
        <CONTACTS_TEXT_P>© 2023. Food Delivery.</CONTACTS_TEXT_P>
      </CONTENT_DIV>
    </STYLED_FOOTER>
  );
}
