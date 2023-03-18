import styled from '@emotion/styled';

export const BASKET_DIV = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%, 0%);
  width: 340px;
  border-radius: 5px;

  background-color: #fff;

  @media screen and (min-width: 760px) {
    width: 440px;
  }

  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;
export const TOP_DIV = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #ff0000;
`;

export const BASKET_H3 = styled.h3`
  padding: 5px 0;
  margin-left: 1%;
  color: #fff;
  font-size: 18px;
`;

export const BUTTONE_CLOSE = styled.button`
  position: absolute;
  top: 0;
  right: 1%;
  background-color: #ffffff00;
  border: none;
  font-size: 22px;
  color: #fff;
  transition: all 0.4s ease 0s;
  :hover,
  :focus {
    cursor: pointer;
    color: #ffffffba;
  }
`;

export const BOTTOM_FORM = styled.form`
  padding: 10px;
  background-color: #fff;
`;

export const TEXT_ARR_EMPTY_P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

// ////////////////////CARD

export const CONTEINER_CARD_BASKET_DIV = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const CARD_BASKET_DIV = styled.div`
  width: 45%;
  border-radius: 5px;
  outline-offset: -1px;
  outline: 1px solid #ccc;
  padding: 0 10px;
  padding-bottom: 5px;
  position: relative;
`;

export const CARD_NAME_P = styled.p`
  color: #ff0000;
`;

export const CARD_IMG = styled.img`
  border-radius: 50%;
`;
export const CARD_PRICE_P = styled.p`
  position: absolute;
  top: 60%;
  right: 5%;
`;
export const CONTEINER_BTN = styled.div`
  width: 60px;
  position: absolute;
  bottom: 10%;
  right: 38%;
  display: flex;
  align-items: center;
`;

export const BUTTON_PLUS = styled.button`
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-left: 10px;
`;
export const BUTTON_MINUS = styled.button`
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-right: 10px;
`;
export const NUMBER_SPAN = styled.span``;
