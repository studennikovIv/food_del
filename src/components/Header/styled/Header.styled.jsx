import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const STYLED_HEADER = styled.header`
  // position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
  @media screen and (min-width: 320px) {
    padding: 0 30px 0 30px;
  }
  @media screen and (min-width: 760px) {
    height: 80px;
  }
  @media screen and (max-width: 760px) {
    position: fixed;
  }
  @media screen and (min-width: 1200px) {
    height: 100px;
    padding: 0 300px 0 300px;
    justify-content: space-around;
  }
`;

export const CONTENT_DIV = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  @media screen and (min-width: 760px) {
    padding: 16px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
    padding: 5px;
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export const LOGO_DIV = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    padding: 5px;
    margin: 5px;
    :hover,
    :focus{
      box-shadow: -2px -2px 5px 0px rgba(0, 0, 0, 0.3);
      transition: all 0.4s ease 0s;
    }
}
`;

export const LOGO_IMG = styled.img`
  fill: black;
  @media screen and (min-width: 350px) {
    width: 40px;
  }
  @media screen and (max-width: 760px) {
    width: 33px;
  }
  @media screen and (min-width: 760px) {
    width: 45px;
  }
  @media screen and (min-width: 1200px) {
    width: 60px;
  }
`;

export const TITLE_CONTEINER_DIV = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 350px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 760px) {
    align-items: start;
    margin-left: 85px;
  }

  @media screen and (min-width: 1200px) {
    align-items: center;
  }
`;
export const TITLE_H1 = styled(Link)`
  font-size: 25px;
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  color: #000;
  @media screen and (min-width: 350px) {
    font-size: 19px;
    letter-spacing: 3px;
    font-weight: 300;
  }
  @media screen and (max-width: 759px) {
    font-size: 15px;
  }
  @media screen and (min-width: 760px) {
    font-size: 30px;
    letter-spacing: 17px;
    text-align: left;
  }
  @media screen and (min-width: 1200px) {
    font-size: 50px;
    letter-spacing: 25px;
  }
`;
export const TITLE_P = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: #000;

  @media screen and (min-width: 350px) {
    font-size: 9px;
    letter-spacing: 1px;
    font-weight: 500;
  }
  @media screen and (min-width: 760px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 15px;
    line-height: 5px;
    letter-spacing: 6px;
    margin-bottom: 15px;
  }
`;
export const BASKET_BTN = styled.button`
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
  @media screen and (min-width: 350px) {
    width: 50px;
    margin-left: 20px;
  }
  @media screen and (min-width: 760px) {
    width: 60px;
    margin-left: 75px;
  }
  @media screen and (min-width: 1200px) {
    width: 80px;
  }
`;

// export const BASKET_IMG = styled.img`
//   width: 100%;
//   height: 100%;
//   borber-radius: 50%;
// `;

export const BASKET_IMG = styled.img`
  width: 100%;
  @media screen and (max-width: 759px) {
    width: 85%;
  }
`;
