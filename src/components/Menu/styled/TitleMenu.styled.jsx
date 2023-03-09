import styled from '@emotion/styled';

export const TitleMenuStyle = styled.ul`
  // display: flex;
  // padding: 15px;

  position: fixed;
  left: 4%;

  // border-radius: 4px;
  // align-items: center;
  // justify-content: space-evenly;
  // background-color: #d1d1d1d1;
  @media screen and (min-width: 760px) {
    left: 5%;
  }

  @media screen and (min-width: 1200px) {
    left: 6%;
  }
`;

export const OnePosition = styled.li`
  display: block;
  width: 100%;
  height: 100%;
`;

export const OneLink = styled.a`
  display: flex;
  justify-content: center;
  padding: 4px;
  margin: 2px;
  font-size: 8px;
  font-weight: bold;
  text-decoration: none;
  width: 100%;
  border: none;
  background-color: #ff000094;
  color: #fff;

  @media screen and (min-width: 760px) {
    font-size: 10px;
    padding: 6px;
    margin: 4px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 13px;
    padding: 8px;
    margin: 6px;
  }
  // margin: 5px;
  padding: 5px;
  // border-radius: 4px;
  // box-shadow: 0px 5px 10px 2px rgb(0 0 0 / 25%);

  :hover,
  :focus {
    cursor: pointer;
    font-weight: bold;
    color: red;
    background-color: #d1d1d1d1;
  }
`;
