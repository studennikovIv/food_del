import { Link } from 'react-router-dom';
import {
  NAVIGATION_MENU_UL,
  LOGO_H1,
  MENU_HEADER_H2,
  ONE_POSITION_LI,
  LINK_A,
} from './styled/TitleMenu.styled';

export function TitleMenu({ props }) {
  return (
    <NAVIGATION_MENU_UL>
      <Link to={`/food_del`}>
        <LOGO_H1>Home page</LOGO_H1>
      </Link>
      <MENU_HEADER_H2>{props[0].nameInst}:</MENU_HEADER_H2>
      {props.map(({ title }) => {
        return (
          <ONE_POSITION_LI key={title}>
            <LINK_A href={`#${title}`}>{title}</LINK_A>
          </ONE_POSITION_LI>
        );
      })}
    </NAVIGATION_MENU_UL>
  );
}
