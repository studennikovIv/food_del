import styled from '@emotion/styled';

export const NAVIGATION_MENU_UL = styled.ul`
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 759px) {
    display: none;
  }
  @media screen and (min-width: 760px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 1%;
    top: 80px;
  }

  @media screen and (min-width: 1200px) {
    top: 100px;
    left: 4%;
  }
`;

export const LOGO_H1 = styled.h1`
  margin: 5px 0;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 10px;
  color: #ff0000;
  background-color: transparent;
  border: 1px solid #ff0000;
  transition: all 0.4s ease 0s;

  @media screen and (min-width: 760px) {
    margin: 10px 0;
    padding: 5px 28px;
    font-size: 13px;
  }
  @media screen and (min-width: 1200px) {
    margin: 10px 0;
    padding: 5px 35px;
    font-size: 16px;
  }

  :hover,
  :focus {
    cursor: pointer;
    font-weight: bold;
    color: #cb0000;
    border-color: #cb0000;
  }
`;

export const MENU_HEADER_H2 = styled.h2`
  font-size: 14px;
  @media screen and (min-width: 760px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const ONE_POSITION_LI = styled.div`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 4px;
  .false {
    display: none !important;
  }
  @media screen and (max-width: 760px) {
    background-color: red;
    width: 100%;
`;

export const LINK_A = styled.a`
  display: flex;
  justify-content: center;
  padding: 4px;
  margin: 2px;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;

  transition: all 0.4s ease 0s;
  @media screen and (max-width: 760px) {
    color: #fff;
  }
  @media screen and (min-width: 760px) {
    padding: 6px;
    margin: 4px;
    width: 130px;
    font-size: 12px;
    background-color: #0000001c;
  }

  @media screen and (min-width: 1200px) {
    padding: 8px;
    margin: 6px;
    width: 160px;
    font-size: 14px;
  }

  :hover,
  :focus {
    cursor: pointer;
    font-weight: bold;
    color: red;
    background-color: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const NAVIGATION_MENU_MOB_DIV = styled.div`
  position: fixed;
  left: 0%;
  top: 70px;

  display: grid;
  place-items: center;

  grid-template-columns: 100% 100% 100%;
  grid-auto-flow: column;
  @media screen and (min-width: 760px) {
    display: none;
  }
`;

export const BURGER_MOBILE_IMG = styled.img``;
