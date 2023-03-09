// import React from 'react';
import { OneCard } from './OneCard';
import {
  MenuStyled,
  ConteinerMenu,
  OneList,
  TitlePosition,
  OneCase,
} from './styled/Menu.styled';
// import { MenuStyled, TitleMenu, OnePosition, Link } from './styled/Menu.styled';
import { TitleMenu } from './TitleMenu';

export function Menu({ prop }) {
  return (
    <ConteinerMenu>
      <TitleMenu props={prop} />
      <MenuStyled>
        {prop.map(prop => {
          const { title } = prop;
          return (
            <OneCase key={title} id={title}>
              <TitlePosition>{title}</TitlePosition>
              <OneList>
                <OneCard position={prop} />
              </OneList>
            </OneCase>
          );
        })}
      </MenuStyled>
    </ConteinerMenu>
  );
}
