import {
  TitleMenuStyle,
  OnePosition,
  OneLink,
} from './styled/TitleMenu.styled';

export function TitleMenu({ props }) {
  return (
    <TitleMenuStyle>
      {props.map(({ name }) => {
        return (
          <div key={name}>
            <h2>{name}</h2>
          </div>
        );
      })}
      {props.map(({ title }) => {
        return (
          <OnePosition key={title}>
            <OneLink href={`#${title}`}>{title}</OneLink>
          </OnePosition>
        );
      })}
    </TitleMenuStyle>
  );
}
