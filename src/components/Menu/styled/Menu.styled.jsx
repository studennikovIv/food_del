import styled from '@emotion/styled';

export const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  // height: 100vh;
  align-items: center;
  margin-top: 10px;
  @media screen and (min-width: 760px) {
    justify-content: center;
    margin-top: 20px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 30px;
  }
`;

export const MenuList = styled.ul`
  display: grid;
  margin: 0 auto !important;
  // background-color: #d1d1d1d1;
  // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 760px) {
    margin-top: 70px;
  }

  // @media screen and (min-width: 1350px) {
  //   max-width: 1000px;
  // }
`;

export const CaseItem = styled.li`
  position: relative;
  margin: 0 0 20px 0;
  padding: 100px 0 0 0;
  :active {
    opacity: 1;
  }
  // :first-child {
  //   padding-top: 150px;
  // }
`;
export const SocialTitle = styled.h1`
  font-size: 30px;
  @media screen and (min-width: 760px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 50px;
  }
`;

export const SubPositionTitle = styled.h2`
  font-size: 15px;
  @media screen and (min-width: 760px) {
    font-size: 20px;
    margin-left: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 25px;
  }
`;

export const SubpositionList = styled.ul`
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
