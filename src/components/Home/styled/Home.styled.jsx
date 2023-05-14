import styled from '@emotion/styled';

export const CONTENT_DIV = styled.div`
  display: grid;
  margin: 100px 0 0 0;
  place-items: center;
  gap: 0 50px;
  grid-template-columns: 280px 280px 280px;
  justify-content: center;
  @media screen and (min-width: 760px) {
    margin: 150px 0 90px 0;
  }
  @media screen and (max-width: 950px) {
    grid-template-columns: 100%;
    gap: 0;
    margin-top: 70px;
  }
`;

export const CLIENTS_DIV = styled.div`
  padding: 10px;

  // img:hover,
  // img:focus {
  //   background: #ffffff;
  //   box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.4);
  //   transform: scale(1.02);
  // }
`;
export const CARD_DIV = styled.div`
  width: 200px;
  cursor: pointer;
  position: relative;
  border-radius: 13px;
  transition: all 0.4s ease 0s;
  img {
    width: 100%;
    max-height: 130px;
    object-fit: cover;
    border-radius: 13px;
    @media screen and (min-width: 460px) {
      max-height: 140px;
    }
    @media screen and (min-width: 760px) {
      max-height: 150px;
    }
    @media screen and (min-width: 1200px) {
      max-height: 160px;
    }
  }
  :hover,
  :focus {
    background: #ffffff;
    box-shadow: 0px 0px 17px 5px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
  }

  @media screen and (min-width: 460px) {
    width: 220px;
  }
  @media screen and (min-width: 760px) {
    width: 240px;
  }
  @media screen and (min-width: 1200px) {
    width: 260px;
  }
`;
export const TIME_WORL_P = styled.p`
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  border-radius: 0 0 13px 13px;
  color: #fff;
`;
