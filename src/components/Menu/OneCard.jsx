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

export const arreyListShopping = [];

export function OneCard({ position }) {
  const { list } = position;
  return list.map(({ img, name, text, price, mass, size }) => {
    return (
      <ONE_CARD_LI key={name}>
        <IMAGE_IMG src={img} alt={name} />
        <NAME_DISH_H1>{name}</NAME_DISH_H1>
        {text && <DESCRIPTION_P>{text}</DESCRIPTION_P>}
        <SUPPORT_DIV>
          {size && <SIZE_P>{size}</SIZE_P>}
          {mass && <MASSA_P>{mass}</MASSA_P>}
        </SUPPORT_DIV>
        <BUTTON_PRICE
          onClick={el => {
            const val = el.target.textContent;
            arreyListShopping.push({ name: name, price: Number(val) });
          }}
        >
          {price}
          {/* ₴ */}
        </BUTTON_PRICE>
      </ONE_CARD_LI>
    );
  });
}
