import styled from '@emotion/styled';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 0 0;
  width: 100%;
  height: 340px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 760px) {
    height: 250px;
  }
  @media screen and (min-width: 760px) {
    height: 200px;
  }
`;

export const ContentFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  width: 100%;

  @media screen and (min-width: 760px) {
    padding: 16px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Title = styled.h2`
  display: flex;
  margin: 10px;
  font-size: 20px;
  font-family: Ubuntu;

  @media screen and (min-width: 760px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const Contacts = styled.ul`
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
`;

export const ContactsContent = styled.p`
  padding: 3px;
  font-size: 16px;
  // font-family: Robota;

  @media screen and (min-width: 760px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Submit = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;

  @media screen and (min-width: 760px) {
    padding: 16px;
    flex-direction: row;
    padding: 0px;
  }
`;
export const Lable = styled.p`
  padding: 3px;
  font-size: 17px;

  @media screen and (min-width: 760px) {
    position: absolute;
    top: -25px;
    left: 0;
    font-size: 19px;
  }
  @media screen and (min-width: 1200px) {
    top: -30px;
    font-size: 21px;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid;
  border-radius: 4px;

  @media screen and (min-width: 760px) {
    width: 300px;
    height: 35px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 45px;
  }
`;

export const ButtonSend = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 5px;
  margin: 10px;
  border-radius: 5px;
  width: 140px;
  font-size: 17px;

  @media screen and (min-width: 760px) {
    width: 160px;
    padding: 2px;
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    width: 180px;
    padding: 5px;
    font-size: 21px;
  }
`;
