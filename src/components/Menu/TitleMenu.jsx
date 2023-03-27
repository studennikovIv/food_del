import { Link } from 'react-router-dom';

import {
  NAVIGATION_MENU_UL,
  LOGO_H1,
  MENU_HEADER_H2,
  ONE_POSITION_LI,
  LINK_A,
  NAVIGATION_MENU_MOB_DIV,
  BURGER_MOBILE_IMG,
} from './styled/TitleMenu.styled';

export function TitleMenu({ props }) {
  return (
    <>
      <NAVIGATION_MENU_UL>
        <Link to={`/food_del`}>
          <LOGO_H1>Home page</LOGO_H1>
        </Link>
<<<<<<< HEAD
        <BURGER_MOBILE_IMG>

        </BURGER_MOBILE_IMG>
        <ul>
          {props.map(({ title }) => {
=======
        <MENU_HEADER_H2>{props[0].nameInst}:</MENU_HEADER_H2>
        {props.map(({ title }) => {
>>>>>>> 8eaa3a30a85e6a718a8831f70483ce4b4fdb9109
          return (
            <ONE_POSITION_LI key={title}>
              <LINK_A href={`#${title}`}>{title}</LINK_A>
            </ONE_POSITION_LI>
          );
        })}
<<<<<<< HEAD
      </ul>
    </NAVIGATION_MENU_MOB_DIV>
=======
      </NAVIGATION_MENU_UL>
      <NAVIGATION_MENU_MOB_DIV>
        <Link to={`/food_del`}>
          <LOGO_H1>Home page</LOGO_H1>
        </Link>
        <BURGER_MOBILE_IMG></BURGER_MOBILE_IMG>
        <ul>
          {props.map(({ title }) => {
            return (
              <ONE_POSITION_LI key={title}>
                <LINK_A href={`#${title}`}>{title}</LINK_A>
              </ONE_POSITION_LI>
            );
          })}
        </ul>
      </NAVIGATION_MENU_MOB_DIV>
>>>>>>> 8eaa3a30a85e6a718a8831f70483ce4b4fdb9109
    </>
  );
}
