import styled from '@emotion/styled';

export const STYLED_FOOTER = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 120px;
  z-index: 9999;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 760px) {
    height: 130px;
  }
  @media screen and (min-width: 1200px) {
    height: 125px;
  }
`;

export const CONTENT_DIV = styled.div`
  // position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 5px;
  width: 100%;

  @media screen and (min-width: 760px) {
    padding: 0 16px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const INFO_UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media screen and (min-width: 760px) {
    padding: 5px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0px;
  }

  li {
    display: flex;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
      margin: 0 0 0 5px;
    }
  }

  a {
    text-decoration: none;

    p {
      display: flex;
      color: black;
      font-size: 17px;
      transition: all 0.4s ease 0s;

      :hover,
      :focus {
        color: red;
        box-shadow: 0px 5px 5px -5px rgb(255 0 0 / 100%);
      }
    }
  }
`;

export const CONTACT_UL = styled.ul`
  display: flex;
  li {
    margin-right: 10px;
    a {
      position: relative;
      display: block;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      transition: all 0.4s ease 0s;

      :hover,
      :focus {
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
      }
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 33px;
        height: 33px;
        border-radius: 50%;
      }
    }
  }
`;

export const CONTACTS_TEXT_P = styled.p`
  padding: 2px;
  font-size: 11px;
  // font-family: Robota;

  @media screen and (min-width: 760px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 13px;
  }
`;
export const CONTACTS_TEXT_P_BOLD = styled.p`
  padding: 2px;
  font-size: 13px;
  font-weight: bold;
  // font-family: Robota;

  @media screen and (min-width: 760px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 15px;
  }
`;
