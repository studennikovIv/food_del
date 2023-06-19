import { Link } from 'react-router-dom';

import logo from './images/logo.jpg';
import basket from './images/1.jpg';

import {
  HeaderWrapper,
  ContentWrapper,
  LogoImg,
  HeaderTitle,
  BasketBtn,
  BasketImg,
  TitleDescription,
  HeaderTitleDescription,
} from './styled/Header.styled';

export function Header({ openBusket }) {
  const clickBusket = () => {
    openBusket(true);
  };

  return (
    <HeaderWrapper>
      <ContentWrapper>
        <Link to="/">
          <LogoImg src={logo} alt="logo" />
        </Link>
        <HeaderTitleDescription>
          <HeaderTitle to="/">FOOD DELIVERY</HeaderTitle>
          <TitleDescription to="/">
            Швидка доставка у твоєму Місті!
          </TitleDescription>
        </HeaderTitleDescription>
        <BasketBtn onClick={clickBusket}>
          <BasketImg src={basket} alt="basket" />
        </BasketBtn>
      </ContentWrapper>
    </HeaderWrapper>
  );
}
