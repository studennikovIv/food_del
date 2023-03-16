import styled from '@emotion/styled';

export const BASKET_DIV = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  justify-content: center;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  background-color: red;
`;

export const BASKET_H3 = styled.h3`
  padding: 5px 0;
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
    color: #b7b6b6;
    transform: scale(1.5);
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
