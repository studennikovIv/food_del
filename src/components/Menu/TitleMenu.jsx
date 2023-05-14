// import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import {
  NAVIGATION_MENU_UL,
  // LINK_Link,
  // HOME_SVG,
  MENU_HEADER_H2,
  ONE_POSITION_LI,
  LINK_A,
  NAVIGATION_MENU_MOB,
  ONE_POSITION_MOB,
} from './styled/TitleMenu.styled';

export function TitleMenu({ props }) {
  const [index, setIndex] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex(index === 0 ? props.length - 3 : index - 1),
    onSwipedRight: () => setIndex(index === props.length - 3 ? 0 : index + 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <>
      <NAVIGATION_MENU_UL>
        {/* <LINK_Link to={`/food_del`}>
          <HOME_SVG /> */}
        {/* <Home /> */}
        {/* <LOGO_H1>Home page</LOGO_H1> */}
        {/* </LINK_Link> */}
        <MENU_HEADER_H2>{props[0].nameInst}:</MENU_HEADER_H2>
        {props.map(({ title }, index) => {
          return (
            <ONE_POSITION_LI key={index}>
              <LINK_A href={`#${title}`}>{title}</LINK_A>
            </ONE_POSITION_LI>
          );
        })}
      </NAVIGATION_MENU_UL>

      {/* <NAVIGATION_MENU_MOB_UL {...handlers}>
        {props.slice(index, index + 3).map(({ title }, index) => {
          return (
            <ONE_POSITION_LI key={index}>
              <LINK_A href={`#${title}`}>{title}</LINK_A>
            </ONE_POSITION_LI>
          );
        })}
      </NAVIGATION_MENU_MOB_UL> */}
      <NAVIGATION_MENU_MOB
        {...handlers}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {props.map(({ title }, index) => {
          return (
            <ONE_POSITION_MOB key={index}>
              <LINK_A href={`#${title}`}>{title}</LINK_A>
            </ONE_POSITION_MOB>
          );
        })}
      </NAVIGATION_MENU_MOB>
    </>
  );
}
