import styled from '@emotion/styled';
export const BASKET_DIV = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%, 0%);
  width: 70%;
  border-radius: 5px;

  background-color: #fff;

  @media screen and (min-width: 760px) {
    width: 440px;
  }
  @media screen and (max-width: 759px) {
    width: 100%;
    height: 100vh;
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

export const BOTTOM_DIV = styled.div`
  padding: 10px;
  height: 86vh;
  background-color: #fff;

  @media screen and (max-width: 759px) {
    height: 83vh;
    .active {
      height: 100vh !important;
    }
  }
`;

export const TEXT_ARR_EMPTY_P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  @media screen and (max-width: 760px) {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;

// ////////////////////CARD
export const CONTEINER_CARD = styled.div`
  max-height: 85%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  .active {
    min-height: 100% !important;
  }
  @media screen and (max-width: 760px) {
    max-height: 100%;
  }
`;
export const CONTEINER_CARD_BASKET_DIV = styled.div`
  display: grid;
  place-items: center;
  gap: 20px;
  grid-template-columns: 100%;
  justify-items: center;

  align-items: center;
`;
export const CARD_BASKET_DIV = styled.div`
  width: 100%;
  min-height: 80px;
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
  position: absolute;
  bottom: 5px;
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

export const CONTEINER_SUM_DIV = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  margin-top: 10px;
`;

export const SUM_P = styled.p``;

export const DELIVERY_P = styled.p``;

export const CONTEINER_BTN_DIV = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
`;
export const CONTEINER_BOTTOM = styled.div`
  position: absolute;
  width: 97%;
  bottom: 10px;
`;
export const LEFT_BUTTON = styled.button`
  cursor: pointer;
  vertical-align: middle;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgba(255, 255, 255, 0);
  color: #999;
  transition: all 0.4s ease 0s;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const RIGHT_BUTTON = styled.button`
  border: 1px solid #ec2929;
  background-color: #ec2929;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  :hover {
    color: #ec2929;
    background-color: #fff;
  }
`;

// CLIENT FORM
export const CLIENT_H3 = styled.h3`
  color: #999;
  width: 90%;
  display: block;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 18px;
`;
export const CLIENT_FORM = styled.form`
  text-align: center;
  width: 97%;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
`;

export const CLIENT_CONTEINER_STREET_DIV = styled.div`
  display: flex;
`;
export const CLIENT_UL = styled.div``;
export const CLIENT_LI = styled.div`
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
  display: inline-block;
  width: 100%;
`;
export const CLIENT_LABEL = styled.label`
  font-size: 16px;
  position: relative;
  top: 10px;
  text-align: left;
  display: block;
  color: #ccc;
  margin-right: auto;
  margin-left: 35px;
  z-index: 8;
  height: 0px;
  width: 100%;
  transition: all 0, 1s;
  .active {
    color: rgba(0, 0, 0, 0);
  }
`;

export const CLIENT_SMALL = styled.small`
  transition: all 1s ease 0s;
  position: relative;
  .active {
    color: #f00;
    display: none;
  }
`;
export const CLIENT_SUP = styled.sup`
  color: #f00;
  position: relative;
  transition: all 1s ease 0s;
  top: 0px;
  .active {
    display: none !important;
  }
`;

export const CLIENT_INPUT = styled.input`
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0);
  padding: 7px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: solid;
  border-left-style: none;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  z-index: 10;
  outline: none;
  width: calc(100% - 35px);
  transition: all 1s;
  :focus {
    border-color: #ff0000;
  }
`;
export const CLIENT_SELECT = styled.select`
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0);
  padding: 7px;
  border-top-style: none;
  border-right-style: none;
  outline: none;
  border-bottom-style: solid;
  border-left-style: none;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  z-index: 10;
  width: -moz-calc(100% - 35px);
  width: -webkit-calc(100% - 35px);
  width: calc(100% - 35px);
`;

export const CONTEINER_CLIENT_SUM_DIV = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SUM_CLIENT_P = styled.p``;
export const DELIVERY_CLIENT_P = styled.p``;
export const CONTEINER_BTN_CLIENT_DIV = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
export const LEFT_CLIENT_BUTTON = styled.button`
  cursor: pointer;
  vertical-align: middle;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgba(255, 255, 255, 0);
  color: #999;
  transition: all 0.4s ease 0s;
  width: 50%;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const RIGHT_CLIENT_BUTTON = styled.button`
  border: 1px solid #ec2929;
  background-color: #ec2929;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  width: 50%;
  :hover {
    color: #ec2929;
    background-color: #fff;
  }
`;
