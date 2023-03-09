import {
  FooterStyled,
  ContentFooter,
  Title,
  Contacts,
  ContactsContent,
} from './styled/Footer.styled';

export function Footer() {
  return (
    <FooterStyled>
      <Title>FAST AND QUALITY</Title>
      <ContentFooter>
        <Contacts>
          <li>
            <ContactsContent>з 8:00 дo 21:00</ContactsContent>
          </li>
          <li>
            <ContactsContent>+380992121234</ContactsContent>
          </li>
          <li>
            <ContactsContent>food-del@gmail.com</ContactsContent>
          </li>
        </Contacts>
        <ContactsContent>© 2023. Food Delivery.</ContactsContent>
      </ContentFooter>
    </FooterStyled>
  );
}
