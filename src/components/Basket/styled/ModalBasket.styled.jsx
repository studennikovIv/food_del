import styled from '@emotion/styled';

export const BasketWrapper = styled.div`
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
    height: 53vh;
  }

  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #ff0000;
`;

export const BasketTitle = styled.h3`
  padding: 5px 0;
  margin-left: 1%;
  color: #fff;
  font-size: 18px;
`;

export const CloseBtn = styled.button`
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

export const BottomWrapper = styled.div`
  padding: 10px;
  height: 420px;
  background-color: #fff;

  .active {
  }
`;

export const EmptyMessage = styled.p`
  position: absolute;
  top: 45%;
  left: 30%;
  font-size: 20px;

  @media screen and (max-width: 760px) {
    position: absolute;
    top: 45%;
    left: 80%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  @media screen and (max-width: 420px) {
    left: 64%;
  }
`;

// ////////////////////CARD
export const CardContainer = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const conteinerCardBasketDiv = styled.div`
  display: grid;
  place-items: center;
  gap: 20px;
  grid-template-columns: 100%;
  justify-items: center;
  align-items: center;
`;

export const CardBasketWrap = styled.div`
  width: 100%;
  min-height: 80px;
  border-radius: 5px;
  outline-offset: -1px;
  outline: 1px solid #ccc;
  padding: 0 10px;
  padding-bottom: 5px;
  position: relative;
`;

export const CardName = styled.p`
  color: #ff0000;
`;

export const CardImage = styled.img`
  border-radius: 50%;
`;

export const CardPrice = styled.p`
  position: absolute;
  top: 60%;
  right: 5%;
`;

export const conteinerBtn = styled.div`
  width: 60px;
  position: absolute;
  bottom: 10%;
  right: 38%;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 5px;
`;

export const PlusBtn = styled.button`
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-left: 10px;
`;
export const MinusBtn = styled.button`
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-right: 10px;
`;

export const SumWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
`;
export const BottomContainer = styled.div`
  position: absolute;
  width: 97%;
`;
export const LeftButton = styled.button`
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

export const RightButton = styled.button`
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
export const ClientH3 = styled.h3`
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

export const ClientForm = styled.form`
  text-align: center;
  width: 77%;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
`;

export const ClientConteinerStreetDiv = styled.div`
  display: flex;
`;

export const ClientUl = styled.div``;

export const ClientLi = styled.div`
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
  display: inline-block;
  width: 100%;
`;

export const ClientLabel = styled.label`
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

export const ClientSmall = styled.small`
  transition: all 1s ease 0s;
  position: relative;
  .active {
    color: #f00;
    display: none;
  }
`;

export const ClientSup = styled.sup`
  color: #f00;
  position: relative;
  transition: all 1s ease 0s;
  top: 0px;
  .active {
    display: none !important;
  }
`;

export const ClientInput = styled.input`
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

export const ClientSelect = styled.select`
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

export const ConteinerClientSumDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SumClientP = styled.p``;

export const DeliveryClientP = styled.p``;

export const ConteinerBtnClientDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
export const LeftClientButton = styled.button`
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

export const RightClientButton = styled.button`
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
