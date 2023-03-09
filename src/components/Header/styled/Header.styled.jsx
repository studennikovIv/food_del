import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  // position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.4);
  z-index: 9999;
  @media screen and (min-width: 760px) {
    height: 80px;
  }
  @media screen and (min-width: 1200px) {
    height: 100px;
  }
`;

export const ContentHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 100%;

  @media screen and (min-width: 760px) {
    padding: 16px;
  }

  @media screen and (min-width: 1200px) {
    // padding: 16px;
    width: 1200px;
  }
`;

export const Logo = styled.img`
  width: 60px;
  fill: currentCollor;

  @media screen and (min-width: 760px) {
    width: 80px;
  }
  @media screen and (min-width: 1200px) {
    width: 110px;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-family: Ubuntu;

  @media screen and (min-width: 760px) {
    font-size: 45px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 65px;
  }
`;

export const LeftInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Contacts = styled.ul`
  position: absolute;
  top: 60px;
  left: 0;
  // transform: translate(-50%);
  display: none;
  justify-content: space-around;
  border-radius: 5px;
  width: 400px;

  background-color: #fff;
  box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: 760px) {
    top: 70px;
    width: 450px;
  }
`;

export const ContentContact = styled.a`
  display: block;
  padding: 2px;
  margin: 2px 0;
  font-size: 19px;
  font-weight: bold;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Basket = styled.button`
  display: flex;
  padding: 0;
  margin: 5px;
  padding: 2px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  width: 50px;

  &:hover,
  &:focus {
    cursor: pointer;
    // box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 760px) {
    width: 60px;
  }
  @media screen and (min-width: 1200px) {
    width: 80px;
  }
`;

export const BasketImg = styled.img`
  width: 100%;
  height: 100%;
  borber-radius: 50%;
`;
