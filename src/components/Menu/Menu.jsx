import { OneCard } from './card/OneCard';
import {
  CONTEINER_MENU_DIV,
  MENU_UL,
  ONE_CASE_LI,
  NAME_SUBPOSITION_H1,
  SUBPOSITION_UL,
} from './styled/Menu.styled';
import { TitleMenu } from './TitleMenu';

export function Menu({ prop, clickOnCard }) {
  return (
    <CONTEINER_MENU_DIV>
      <TitleMenu props={prop} />
      <MENU_UL>
        {prop.map(res => {
          const { title } = res;

          return (
            <ONE_CASE_LI key={title} id={title}>
              <NAME_SUBPOSITION_H1>{title}</NAME_SUBPOSITION_H1>
              <SUBPOSITION_UL>
                <OneCard position={res} clickOnCard={clickOnCard} />
              </SUBPOSITION_UL>
            </ONE_CASE_LI>
          );
        })}
      </MENU_UL>
    </CONTEINER_MENU_DIV>
  );
}
