import { OneCard } from './card/OneCard';
import {
  CONTEINER_MENU_DIV,
  MENU_UL,
  ONE_CASE_LI,
  NAMEINST_P,
  NAME_SUBPOSITION_H1,
  SUBPOSITION_UL,
} from './styled/Menu.styled';
import { TitleMenu } from './TitleMenu';

export const Menu = ({ prop, clickOnCard }) => {
  return (
    <CONTEINER_MENU_DIV>
      <TitleMenu props={prop} />
      <MENU_UL>
        {prop.map(res => {
          const { title, nameInst, list } = res;
          return (
            <ONE_CASE_LI key={title} id={title}>
              {nameInst && <NAMEINST_P>{nameInst}</NAMEINST_P>}
              <NAME_SUBPOSITION_H1>{title}</NAME_SUBPOSITION_H1>
              <SUBPOSITION_UL>
                <OneCard position={list} clickOnCard={clickOnCard} />;
              </SUBPOSITION_UL>
            </ONE_CASE_LI>
          );
        })}
        {/* {prop.list.map(res => {
          const { title, nameInst } = res;
          console.log(res);
          return (
            <ONE_CASE_LI key={title} id={title}>
              {nameInst && <NAMEINST_P>{nameInst}</NAMEINST_P>}
              <NAME_SUBPOSITION_H1>{title}</NAME_SUBPOSITION_H1>
              <SUBPOSITION_UL>
                <OneCard position={res} clickOnCard={clickOnCard} />
              </SUBPOSITION_UL>
            </ONE_CASE_LI>
          );
        })} */}
      </MENU_UL>
    </CONTEINER_MENU_DIV>
  );
};
