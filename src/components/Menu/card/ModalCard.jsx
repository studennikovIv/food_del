import {
  BACKDROP_DIV,
  MODAL_DIV,
  TOP_MODAL_DIV,
  BUTTON_CLOSE,
  CONTENT_DIV,
  INCREASED_INFO_DIV,
  BUTTON_ORDER,
  SUPPLEMENTS_DIV,
} from './styled/ModalCard.styled';

export function ModalCard({
  modalClose,
  img,
  name,
  price,
  text,
  clickAddBasket,
  basketArr,
}) {
  const ClickOnCard = () => {
    modalClose(false);
  };

  const addBasket = () => {
    clickAddBasket(img, name, price, text);
  };

  return (
    <BACKDROP_DIV>
      <MODAL_DIV>
        <TOP_MODAL_DIV>
          <h3>{name}</h3>
          <BUTTON_CLOSE onClick={ClickOnCard}>×</BUTTON_CLOSE>
        </TOP_MODAL_DIV>
        <CONTENT_DIV>
          <INCREASED_INFO_DIV>
            <img src={img} alt="" />
            <p>{text}</p>
          </INCREASED_INFO_DIV>
          <SUPPLEMENTS_DIV>
            <h3>CONTENT</h3>
          </SUPPLEMENTS_DIV>
        </CONTENT_DIV>
        <BUTTON_ORDER>
          <button onClick={addBasket}>{price}₴</button>
        </BUTTON_ORDER>
      </MODAL_DIV>
    </BACKDROP_DIV>
  );
}
