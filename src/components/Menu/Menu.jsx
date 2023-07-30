import { OneCard } from './card/OneCard';
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';
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
            <CaseItem key={nameInst} id={title}>
              {nameInst && <SocialTitle>{nameInst}</SocialTitle>}
              <SubPositionTitle>{title}</SubPositionTitle>
              <SubpositionList>
                <OneCard position={list} clickOnCard={clickOnCard} />
              </SubpositionList>
            </CaseItem>
          );
        })}
      </MenuList>
    </MenuWrapper>
  );
};
