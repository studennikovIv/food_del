import styled from '@emotion/styled';

export const CONTEINER_MENU_DIV = styled.div`
  position: relative;
  display: flex;
  min-height: 85wh;
  align-items: center;
  margin-top: 110px;
  @media screen and (min-width: 760px) {
    justify-content: center;
    margin-top: 100px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 130px;
    // width: 1000px;
    // justify-content: center;
    // align-items: center;
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
  @media screen and (max-width: 760px) {
    margin-top: 70px;
  }

  // @media screen and (min-width: 1350px) {
  //   max-width: 1000px;
  // }
`;

export const ONE_CASE_LI = styled.li`
  position: relative;
  margin: 0 0 20px 0;
  padding: 150px 0 0 0;
  :active {
    opacity: 1;
  }
  // :first-child {
  //   padding-top: 150px;
  // }
`;
export const NAMEINST_P = styled.p`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  font-size: 60px;
`;

export const NAME_SUBPOSITION_H1 = styled.h1`
  font-size: 15px;
  @media screen and (min-width: 760px) {
    font-size: 20px;
    margin-left: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 25px;
  }
`;

export const SUBPOSITION_UL = styled.ul`
  display: grid;
  place-items: center;
  gap: 0 50px;
  grid-template-columns: 250px 250px 250px;
  justify-items: center;

  align-items: center;
  @media screen and (max-width: 759px) {
    margin: 0 auto !important;
    grid-template-columns: 150px 150px;
    gap: 10px 25px;
  }
  @media screen and (min-width: 760px) and (max-width: 1199px) {
    grid-template-columns: 250px 250px;
    gap: 0;
  }
`;
