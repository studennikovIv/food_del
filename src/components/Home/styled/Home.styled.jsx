import styled from '@emotion/styled';

export const CONTENT_DIV = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CLIENTS_DIV = styled.div`
  padding: 5px;
  margin: 10px;

  img:hover,
  img:focus {
    border-radius: 23px;
    background: #ffffff;
    box-shadow: -10px -10px 20px #e6e6e6, 10px 10px 20px #ffffff;
    transition: all 0.2s ease 0s;
  }

  @media screen and (min-width: 760px) {
    padding: 10px;
    margin: 20px;
  }
  @media screen and (min-width: 1200px) {
    margin: 30px;
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
