import styled from '@emotion/styled';

export const CONTENT_DIV = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CLIENTS_DIV = styled.div`
  margin: 10px;

  @media screen and (min-width: 760px) {
    padding: 10px;
    margin: 20px;
  }
  @media screen and (min-width: 1200px) {
    margin: 30px;
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
