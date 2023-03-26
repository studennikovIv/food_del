import styled from '@emotion/styled';

export const NAVIGATION_MENU_UL = styled.ul`
  position: fixed;
  left: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
  }
  @media screen and (max-width: 759px) {
    display: none;
  }
  @media screen and (min-width: 760px) {
    left: 1%;
    top: 15%;
  }

  @media screen and (min-width: 1200px) {
    left: 4%;
  }
`;

export const LOGO_H1 = styled.h1`
  margin: 5px 0;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 10px;
  color: #fff;
  background-color: #5768ff;
  transition: all 0.4s ease 0s;

  @media screen and (min-width: 760px) {
    margin: 10px 0;
    padding: 5px 28px;
    font-size: 13px;
  }
  @media screen and (min-width: 1200px) {
    margin: 15px 0;
    padding: 5px 35px;
    font-size: 16px;
  }

  :hover,
  :focus {
    cursor: pointer;
    font-weight: bold;
    color: blue;
    background-color: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
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

export const ONE_POSITION_LI = styled.li`
  display: block;
  width: 100%;
  height: 100%;
`;

export const LINK_A = styled.a`
  display: flex;
  justify-content: center;
  padding: 4px;
  margin: 2px;
  border: none;
  border-radius: 4px;
  width: 100px;
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  background-color: #0000001c;
  transition: all 0.4s ease 0s;

  @media screen and (min-width: 760px) {
    padding: 6px;
    margin: 4px;
    width: 130px;
    font-size: 12px;
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
  top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 760px) {
    display: none;
  }
`;

export const BURGER_MOBILE_IMG = styled.img``;
