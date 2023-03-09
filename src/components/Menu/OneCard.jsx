import {
  OneCardStyled,
  ImageInCard,
  NamePosition,
  Description,
  ButtonPrice,
  Massa,
  Size,
} from './styled/OneCard.styled';

export function OneCard({ position }) {
  const { list } = position;
  return list.map(({ img, name, text, price, mass, size }) => {
    return (
      <OneCardStyled key={name}>
        <ImageInCard src={img && img} alt={name && name} />
        <NamePosition>{name && name}</NamePosition>
        <Description>{text && text}</Description>
        <Size>{size && size}</Size>
        <Massa>{mass && mass}</Massa>
        <ButtonPrice>{price && price}</ButtonPrice>
      </OneCardStyled>
    );
  });
}
