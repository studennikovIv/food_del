// import { useState } from 'react';

import {
  ONE_CARD_LI,
  IMAGE_IMG,
  NAME_DISH_H1,
  DESCRIPTION_P,
  SUPPORT_DIV,
  MASSA_P,
  SIZE_P,
  BUTTON_PRICE,
} from './styled/OneCard.styled';
export { ModalCard } from './ModalCard';

export function OneCard({ position, clickOnCard }) {
  // const [lincImg, useLincImg] = useState('');
  const { list } = position;

  let linkImg = '';
  let linkName = '';
  let linkPrice = '';
  let linkText = '';

  const ClickOpenModal = () => {
    clickOnCard(true, linkImg, linkName, linkPrice, linkText);
  };

  return list.map(({ img, name, text, price, mass, size }) => {
    return (
      <ONE_CARD_LI
        key={name}
        onClick={() => {
          linkImg = img;
          linkName = name;
          linkPrice = price;
          linkText = text;
          ClickOpenModal();
        }}
      >
        <IMAGE_IMG src={img} alt={name} />
        <NAME_DISH_H1>{name}</NAME_DISH_H1>
        {text && <DESCRIPTION_P>{text}</DESCRIPTION_P>}
        <SUPPORT_DIV>
          {size && <SIZE_P>{size}</SIZE_P>}
          {mass && <MASSA_P>{mass}</MASSA_P>}
        </SUPPORT_DIV>
        <BUTTON_PRICE>{price}₴</BUTTON_PRICE>
      </ONE_CARD_LI>
    );
  });
}
