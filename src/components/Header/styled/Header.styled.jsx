import styled from '@emotion/styled';

export const STYLED_HEADER = styled.header`
  // position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.4);
  z-index: 9999;
  @media screen and (min-width: 760px) {
    height: 80px;
  }
  @media screen and (min-width: 1200px) {
    height: 100px;
  }
`;

export const CONTENT_DIV = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 100%;

  @media screen and (min-width: 760px) {
    padding: 16px;
  }

  @media screen and (min-width: 1200px) {
    // padding: 16px;
    width: 1200px;
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
  width: 50px;
  fill: black;

  @media screen and (min-width: 760px) {
    width: 70px;
  }
  @media screen and (min-width: 1200px) {
    width: 100px;
  }
`;

export const TITLE_H1 = styled.h1`
  font-size: 25px;
  font-family: Ubuntu;

  @media screen and (min-width: 760px) {
    font-size: 45px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 65px;
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

  @media screen and (min-width: 760px) {
    width: 60px;
  }
  @media screen and (min-width: 1200px) {
    width: 80px;
  }
`;

export const BASKET_IMG = styled.img`
  width: 100%;
  height: 100%;
  borber-radius: 50%;
`;
