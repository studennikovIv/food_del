import styled from '@emotion/styled';

export const CONTEINER_MENU_DIV = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;

  @media screen and (min-width: 470px) {
    justify-content: center;
  }
  @media screen and (min-width: 760px) {
    justify-content: center;
  }
  @media screen and (min-width: 890px) {
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const MENU_UL = styled.ul`
  display: grid;
  margin: 0 auto !important;
  // background-color: #d1d1d1d1;
  // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 760px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const ONE_CASE_LI = styled.li`
  margin: 0 0 20px 0;
  // padding: 80px 0 0 0;
  :active {
    opacity: 1;
  }
`;

export const NAME_SUBPOSITION_H1 = styled.h1`
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

export const SUBPOSITION_UL = styled.ul`
  display: grid;
  place-items: center;
  gap: 0 50px;
  grid-template-columns: 250px 250px 250px;
  justify-items: center;
  margin-left: 30px;
  align-items: center;
  @media screen and (max-width: 760px) {
    margin: 0 auto !important;
    grid-template-columns: 250px;
  }
`;
