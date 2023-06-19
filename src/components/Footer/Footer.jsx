import { ReactComponent as Bike } from './svg/bike-svgrepo-com (1).svg';
import { ReactComponent as Instagram } from './svg/instagram-1-svgrepo-com.svg';
// import { ReactComponent as Facebook } from './svg/facebook-color-svgrepo-com.svg';
import { ReactComponent as Telegramm } from './svg/telegram-svgrepo-com.svg';
import {
  FooterWrapper,
  ContentWrapper,
  InfoList,
  ContactList,
  ContactsText,
  ContactsTextBold,
} from './styled/Footer.styled';

export function Footer() {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <InfoList>
          <li>
            <ContactsTextBold> 10:00 - 22:00</ContactsTextBold>
            <Bike />
          </li>
          <li>
            <a href="tel:+380936649675">
              <ContactsText>+380936649675</ContactsText>
            </a>
          </li>
          <li>
            <a href="mailto:food.delivery.pvl@gmail.com">
              <p>food.delivery.pvl@gmail.com</p>
            </a>
          </li>
        </InfoList>
        <ContactList>
          <li>
            <a href="https://instagram.com/food_delivery_pavlograd?igshid=ZDdkNTZiNTM=">
              <Instagram />
            </a>
          </li>

          <li>
            <a href="https://t.me/food_delivery_pvl">
              <Telegramm />
            </a>
          </li>
        </ContactList>
      </ContentWrapper>
      <ContactsText>© 2023. Food Delivery.</ContactsText>
    </FooterWrapper>
  );
}
