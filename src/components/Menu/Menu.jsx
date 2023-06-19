import { OneCard } from './card/OneCard';
import {
  MenuWrapper,
  MenuList,
  CaseItem,
  SocialTitle,
  SubPositionTitle,
  SubpositionList,
} from './styled/Menu.styled';
import { TitleMenu } from './TitleMenu';

export const Menu = ({ prop, clickOnCard }) => {
  return (
    <MenuWrapper>
      <TitleMenu props={prop} />
      <MenuList>
        {prop.map(res => {
          const { title, nameInst, list } = res;
          return (
            <CaseItem key={title} id={title}>
              {nameInst && <SocialTitle>{nameInst}</SocialTitle>}
              <SubPositionTitle>{title}</SubPositionTitle>
              <SubpositionList>
                <OneCard position={list} clickOnCard={clickOnCard} />
              </SubpositionList>
            </CaseItem>
          );
        })}
        {/* {prop.list.map(res => {
          const { title, nameInst } = res;
          console.log(res);
          return (
            <ONE_CASE_LI key={title} id={title}>
              {nameInst && <NAMEINST_H1>{nameInst}</NAMEINST_H1>}
              <NAME_SUBPOSITION_H>{title}</NAME_SUBPOSITION_H>
              <SUBPOSITION_UL>
                <OneCard position={res} clickOnCard={clickOnCard} />
              </SUBPOSITION_UL>
            </ONE_CASE_LI>
          );
        })} */}
      </MenuList>
    </MenuWrapper>
  );
};
