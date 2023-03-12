import styled from '@emotion/styled';

export const BACKDROP_DIV = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #00000075;
`;

export const MODAL_DIV = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  border-radius: 5px;
  border: none;

  background-color: #fff;
`;

export const TOP_MODAL_DIV = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;

  background-color: red;
`;

export const BUTTON_CLOSE = styled.button``;
