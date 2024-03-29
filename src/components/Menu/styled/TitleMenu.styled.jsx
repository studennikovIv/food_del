import styled from '@emotion/styled';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';
// import { ReactComponent as Home } from '../svg/home.svg';

// export const LINK_Link = styled(Link)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   margin: 5px;
//   width: 60px;
//   height: 60px;
//   color: black;
//   transition: all 0.4s ease 0s;

//   :hover,
//   :focus {
//     cursor: pointer;
//     font-weight: bold;
//     background-color: #e9e9e9;
//     box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3);
//   }
//   @media screen and (min-width: 1200px) {
//     width: 80px;
//     height: 80px;
//   }
// `;

// export const HOME_SVG = styled(Home)`
//   fill: currentColor;
//   width: 70%;
//   height: 70%;
// `;
// --------------------------------------------
export const NAVIGATION_MENU_UL = styled.ul`
  a {
    text-decoration: none;
  }
  // @media screen and (max-width: 759px) {
  //   display: none;
  // }
  // @media screen and (min-width: 760px) {
  //   position: fixed;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   left: 1%;
  //   top: 120px;
  // }

  // @media screen and (min-width: 1200px) {
  //   top: 140px;
  //   left: 4%;
  // }

  display: none;
`;

export const MENU_HEADER_H2 = styled.h2`
  @media screen and (min-width: 760px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const ONE_POSITION_LI = styled.li`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 4px;
  @media screen and (max-width: 759px) {
    background-color: red;
    // width: 33.33%;
    height: 40px;
    border-radius: 0px;
    display: flex;
    align-items: center;
`;

export const LINK_A = styled.a`
  display: flex;
  justify-content: center;
  padding: 4px;
  margin: 2px;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;

  transition: all 0.4s ease 0s;

  @media screen and (min-width: 760px) {
    padding: 6px;
    margin: 4px;
    font-size: 12px;
  }

  @media screen and (min-width: 1200px) {
    padding: 8px;
    margin: 6px;
    font-size: 14px;
  }

  :hover,
  :focus {
    cursor: pointer;
    font-weight: bold;
    color: red;
    background-color: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const NAVIGATION_MENU_MOB = styled(Swiper)`
  a {
    text-decoration: none;
  }
  position: fixed;
  flex-wrap: nowrap;
  left: 0%;
  top: 70px;
  display: flex;
  // flex-wrap: wrap;
  width: 100%;
  border: 1px solid red;
  align-items: center;
  background-color: red;
  transition: all 0.4s ease 0s;

  @media screen and (min-width: 760px) {
    top: 80px;
    width: 760px;
    left: 50%;
    transform: translate(-50%);
    border-end-end-radius: 4px;
    border-end-start-radius: 4px;
  }
  @media screen and (min-width: 1200px) {
    top: 100px;
    width: 1200px;
  }
`;
export const ONE_POSITION_MOB = styled(SwiperSlide)`
  border: none;
  border-radius: 4px;
  background-color: red;
  @media screen and (max-width: 760px) {
    // width: 33.33%;
    height: 40px;
    border-radius: 0px;
    display: flex;
    align-items: center;
  }
`;
export const BUTTON_NAV = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 40px;
  background-color: red;
`;

export const BURGER_MOBILE_IMG = styled.img``;
