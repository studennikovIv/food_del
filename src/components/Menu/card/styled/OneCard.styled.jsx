import styled from '@emotion/styled';

export const ONE_CARD_LI = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  border-radius: 5px;
  padding: 0px;
  width: 150px;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55);
  transition: all 0.4s ease 0s;

  @media screen and (min-width: 760px) {
    margin: 10px;
    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    margin: 15px;
    width: 250px;
  }

  :hover,
  :focus {
    transform: scale(1.03);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.9);
  }
`;

export const IMAGE_IMG = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const NAME_DISH_H1 = styled.h1`
  text-align: center;
  padding: 5px;
  font-size: 12px;

  @media screen and (min-width: 760px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const DESCRIPTION_P = styled.p`
  padding: 0 5px 7px 5px;
  font-size: 8px;
  text-align: center;
  // margin: 0 0 7px 0;

  @media screen and (min-width: 760px) {
    padding: 0 7px 10px 7px;
    font-size: 10px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;

export const SUPPORT_DIV = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0 3px 7px 3px;
`;

export const MASSA_P = styled.p`
  font-size: 8px;
  font-weight: bold;

  @media screen and (min-width: 760px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;

export const SIZE_P = styled.p`
  font-size: 8px;

  @media screen and (min-width: 760px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;

export const BUTTON_PRICE = styled.button`
  font-size: 10px;
  text-align: center;
  padding: 2px 35px;
  border: none;
  margin: 0 0 10px 0;
  border-radius: 4px;
  color: #ffffff;
  background-color: red;
  text-decoration: none;
  transition: all 0.4s ease 0s;

  @media screen and (min-width: 760px) {
    font-size: 11px;
    padding: 2px 55px;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 0 15px 0;
    font-size: 14px;
    padding: 2px 75px;
  }

  :hover,
  :focus {
    cursor: pointer;
    font-weight: bold;
    color: red;
    outline: 1px solid red;
    background-color: #ffffff;
  }
`;
