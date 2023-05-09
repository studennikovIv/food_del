import styled from '@emotion/styled';

export const CONTENT_DIV = styled.div`
  display: grid;
  margin: 100px 0 0 0;
  place-items: center;
  gap: 0 100px;
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

  img {
    border-radius: 13px;
    transition: all 0.4s ease 0s;
  }

  img:hover,
  img:focus {
    background: #ffffff;
    box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
  }
`;

export const CARD_DIV = styled.div`
  width: 350px;
  cursor: pointer;
  img {
    height: 233px;
    width: 360px;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
