import styled from '@emotion/styled';

export const STYLED_FOOTER = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 340px;
  z-index: 9999;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  background: rgb(85, 85, 85);
  background: linear-gradient(
    90deg,
    rgba(85, 85, 85, 1) 0%,
    rgba(171, 171, 171, 1) 35%,
    rgba(255, 255, 255, 1) 100%
  );

  @media screen and (min-width: 760px) {
    height: 250px;
  }
  // @media screen and (min-width: 760px) {
  //   height: 200px;
  // }
`;

export const CONTENT_DIV = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  width: 100%;

  @media screen and (min-width: 760px) {
    padding: 16px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const TITLE_H1 = styled.h1`
  display: flex;
  margin: 10px;
  font-size: 20px;
  font-family: Ubuntu;

  @media screen and (min-width: 760px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const CONTACTS_UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media screen and (min-width: 760px) {
    padding: 5px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0px;
  }
`;

export const CONTACTS_TEXT_P = styled.p`
  padding: 3px;
  font-size: 16px;
  // font-family: Robota;

  @media screen and (min-width: 760px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
