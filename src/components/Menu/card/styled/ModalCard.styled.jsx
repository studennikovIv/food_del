import styled from '@emotion/styled';

export const BACKDROP_DIV = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #00000085;
`;

export const MODAL_DIV = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  border-radius: 5px;
  border: none;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  @media screen and (min-width: 760px) {
    width: 600px;
  }

  @media screen and (min-width: 1200px) {
    width: 800px;
  }
`;

export const TOP_MODAL_DIV = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  background-color: red;

  h3 {
    padding: 5px 0;
    color: #fff;
    font-size: 18px;
  }
`;

export const BUTTON_CLOSE = styled.button`
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
    color: #b7b6b6;
    transform: scale(1.5);
  }
`;

export const CONTENT_DIV = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  @media screen and (min-width: 760px) {
    padding: 0 20px;
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 40px;
  }
`;

export const INCREASED_INFO_DIV = styled.div`
  p {
    padding: 5px;
  }
  @media screen and (min-width: 760px) {
    img {
      width: 300px;
    }
    p {
      padding: 10px;
      width: 300px;
    }
  }

  @media screen and (min-width: 1200px) {
    img {
      width: 400px;
    }
    p {
      padding: 15px;
      width: 400px;
    }
  }
`;

export const SUPPLEMENTS_DIV = styled.div`
  width: 100%;
`;

export const BUTTON_ORDER = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 0;
  width: 100%;

  button {
    padding: 3px 50px;
    text-align: center;
    border: none;
    border-radius: 4px;
    font-size: 15px;
    color: #ffffff;
    background-color: red;
    text-decoration: none;
    transition: all 0.4s ease 0s;

    :hover,
    :focus {
      cursor: pointer;
      font-weight: bold;
      color: red;
      outline: 1px solid red;
      background-color: #ffffff;
    }
  }

  @media screen and (min-width: 760px) {
    padding: 20px 0 15px 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 25px 0 20px 0;
  }
`;