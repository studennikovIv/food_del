import styled from '@emotion/styled';

export const NAVIGATION_MENU_UL = styled.ul`
  position: fixed;
  left: 4%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 760px) {
    left: 5%;
  }

  @media screen and (min-width: 1200px) {
    left: 6%;
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
  background-color: #ff000094;
  color: #fff;

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
    background-color: #d1d1d1d1;
  }
`;
