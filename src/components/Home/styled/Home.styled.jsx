import styled from '@emotion/styled';

export const CONTENT_DIV = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CLIENTS_DIV = styled.div`
  margin: 10px;
  transition: all 0.4s ease 0s;

  @media screen and (min-width: 760px) {
    padding: 10px;
    margin: 20px;
  }
  @media screen and (min-width: 1200px) {
    margin: 30px;
  }

  img {
    border-radius: 13px;
  }

  img:hover,
  img:focus {
    background: #ffffff;
    box-shadow: -10px -10px 20px black, 10px 10px 20px #ffffff;
    transition: all 0.4s ease 0s;
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
