// import React from 'react';
import logo from './images/location-pin-svgrepo-com.svg';
import basket from './images/basket-free-material-svgrepo-com.svg';
import home from '../Home/Home';
import {
  HeaderStyled,
  ContentHeader,
  Logo,
  Title,
  LeftInfo,
  Contacts,
  ContentContact,
  Basket,
  BasketImg,
} from './styled/Header.styled';

export function Header() {
  return (
    <HeaderStyled>
      <ContentHeader>
        <a href={home}>
          <Logo src={logo} alt="logo" />
        </a>
        <Title>FOOD DELIVERY</Title>
        <LeftInfo>
          <Contacts>
            <li>
              <ContentContact>+380992121234</ContentContact>
            </li>
            <li>
              <ContentContact>food-del@gmail.com</ContentContact>
            </li>
          </Contacts>
          <Basket>
            <BasketImg src={basket} alt="basket" />
          </Basket>
        </LeftInfo>
      </ContentHeader>
    </HeaderStyled>
  );
}
