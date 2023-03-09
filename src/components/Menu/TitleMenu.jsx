import {
  TitleMenuStyle,
  OnePosition,
  OneLink,
} from './styled/TitleMenu.styled';

export function TitleMenu({ props }) {
  return (
    <TitleMenuStyle>
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
