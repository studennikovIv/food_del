import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
  @media screen and (min-width: 320px) {
    padding: 0 10px 0 10px;
  }
  @media screen and (min-width: 760px) {
    padding: 0 20px 0 20px;
    height: 80px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 40px 0 40px;
    height: 100px;
    justify-content: space-around;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 760px) {
    padding: 16px;
  }
  @media screen and (min-width: 1200px) {
    padding: 5px;
  }
  a {
    text-decoration: none;
  }
`;

export const LOGO_DIV = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    padding: 5px;
    margin: 5px;
    :hover,
    :focus{
      box-shadow: -2px -2px 5px 0px rgba(0, 0, 0, 0.3);
      transition: all 0.4s ease 0s;
    }
}
`;

export const LogoImg = styled.img`
  fill: black;
  @media screen and (min-width: 350px) {
    width: 40px;
  }
  @media screen and (max-width: 760px) {
    width: 33px;
  }
  @media screen and (min-width: 760px) {
    width: 45px;
  }
  @media screen and (min-width: 1200px) {
    width: 60px;
  }
`;

export const HeaderTitleDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 350px) {
  }
  @media screen and (min-width: 760px) {
  }
`;

export const HeaderTitle = styled(Link)`
  font-family: 'Inter', sans-serif;
  color: #000;
  @media screen and (min-width: 350px) {
    font-size: 20px;
    letter-spacing: 3px;
    font-weight: 400;
  }
  @media screen and (min-width: 760px) {
    font-weight: 500;
    font-size: 25px;
    letter-spacing: 10px;
  }
  @media screen and (min-width: 1200px) {
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 15px;
  }
`;

export const TITLE_P = styled(Link)`
  font-family: 'Inter', sans-serif;
  color: #000;
  font-size: 9px;

  @media screen and (min-width: 350px) {
    letter-spacing: 1px;
    font-weight: 500;
  }
  @media screen and (min-width: 760px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 2px;
  }
`;
export const BasketBtn = styled.button`
  display: flex;
  padding: 0;
  padding: 2px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  width: 50px;
  outline: none;
  border: none;

  &:hover,
  &:focus {
    cursor: pointer;
    // box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  }
  @media screen and (min-width: 350px) {
    width: 50px;
  }
  @media screen and (min-width: 760px) {
    width: 60px;
  }
  @media screen and (min-width: 1200px) {
    width: 80px;
  }
`;

// export const BASKET_IMG = styled.img`
//   width: 100%;
//   height: 100%;
//   borber-radius: 50%;
// `;

export const BasketImg = styled.img`
  width: 100%;
  @media screen and (max-width: 759px) {
    width: 85%;
  }
`;
