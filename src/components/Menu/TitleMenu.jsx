import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  NAVIGATION_MENU_UL,
  LOGO_H1,
  MENU_HEADER_H2,
  ONE_POSITION_LI,
  LINK_A,
  NAVIGATION_MENU_MOB_DIV,
  // BURGER_MOBILE_IMG,
} from './styled/TitleMenu.styled';

export function TitleMenu({ props }) {
  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex(index === 0 ? props.length - 3 : index - 1),
    onSwipedRight: () => setIndex(index === props.length - 3 ? 0 : index + 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const [index, setIndex] = useState(0);

  return (
    <>
      <NAVIGATION_MENU_UL>
        <Link to={`/food_del`}>
          <LOGO_H1>Home page</LOGO_H1>
        </Link>
        <MENU_HEADER_H2>{props[0].nameInst}:</MENU_HEADER_H2>
        {props.map(({ title }, index) => {
          return (
            <ONE_POSITION_LI key={index}>
              <LINK_A href={`#${title}`}>{title}</LINK_A>
            </ONE_POSITION_LI>
          );
        })}
      </NAVIGATION_MENU_UL>
      <NAVIGATION_MENU_MOB_DIV {...handlers}>
        {/* <BURGER_MOBILE_IMG></BURGER_MOBILE_IMG> */}

        {props.slice(index, index + 3).map(({ title }, index) => {
          return (
            <ONE_POSITION_LI key={title}>
              <LINK_A href={`#${title}`}>{title}</LINK_A>
            </ONE_POSITION_LI>
          );
        })}
      </NAVIGATION_MENU_MOB_DIV>
    </>
  );
}
