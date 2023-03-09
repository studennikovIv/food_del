import styled from '@emotion/styled';

export const ConteinerMenu = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  @media screen and (min-width: 470px) {
    justify-content: center;
  }
  @media screen and (min-width: 760px) {
    justify-content: flex-end;
  }
  @media screen and (min-width: 890px) {
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

export const MenuStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 230px;
  // background-color: #d1d1d1d1;
  // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 760px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const OneCase = styled.li`
  margin: 0 0 20px 0;
  // padding: 80px 0 0 0;
`;

export const TitlePosition = styled.h1`
  font-size: 15px;
  margin: 0 0 0 40px;

  @media screen and (min-width: 760px) {
    font-size: 20px;
    margin: 0 0 0 60px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 25px;
    margin: 0 0 0 80px;
  }
`;

export const OneList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
