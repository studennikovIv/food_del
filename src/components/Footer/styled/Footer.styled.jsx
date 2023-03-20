import styled from '@emotion/styled';

export const STYLED_FOOTER = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 120px;
  z-index: 9999;
  box-shadow: 0px -6px 4px 0px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: 760px) {
    height: 170px;
  }
  @media screen and (min-width: 1200px) {
    height: 150px;
  }
`;

export const TITLE_H1 = styled.h1`
  display: flex;
  font-size: 15px;
  font-family: Ubuntu;

  @media screen and (min-width: 760px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 19px;
  }
`;

export const CONTENT_DIV = styled.div`
  // position: relative;
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
  padding: 2px;
  font-size: 11px;
  // font-family: Robota;

  @media screen and (min-width: 760px) {
    font-size: 13px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 15px;
  }
`;
