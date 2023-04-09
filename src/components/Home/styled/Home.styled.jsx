import styled from '@emotion/styled';

export const CONTENT_DIV = styled.div`
  display: grid;
  place-items: center;
  gap: 0 100px;
  grid-template-columns: 250px 250px 250px;
  justify-content: center;
  @media screen and (max-width: 780px) {
    grid-template-columns: 200px 200px;
    gap: 0;
  }
`;

export const CLIENTS_DIV = styled.div`
  @media screen and (min-width: 760px) {
    padding: 10px;
  }

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
  width: 120px;
  cursor: pointer;

  @media screen and (min-width: 760px) {
    width: 180px;
  }
  @media screen and (min-width: 1200px) {
    width: 220px;
  }
`;