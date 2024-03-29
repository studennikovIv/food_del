import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-basis: 100%;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 190px;
  z-index: 9999;
  box-shadow: 0px -10px 5px -5px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 760px) {
    height: 130px;
  }
  @media screen and (min-width: 1200px) {
    height: 125px;
  }
`;

export const ContentWrapper = styled.div`
  // position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 5px;
  width: 100%;
  height: 200px;

  @media screen and (min-width: 760px) {
    padding: 0 16px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

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
      }
    }
  }
`;

export const ContactList = styled.ul`
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
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
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

export const ContactsText = styled.p`
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
export const ContactsTextBold = styled.p`
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
