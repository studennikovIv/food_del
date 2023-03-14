import {
  BACKDROP_DIV,
  MODAL_DIV,
  TOP_MODAL_DIV,
  BUTTON_CLOSE,
  CONTENT_DIV,
  INCREASED_INFO_DIV,
  BUTTON_ORDER,
} from './styled/ModalCard.styled';

export function ModalCard({ modalClose, img, name, price, text }) {
  const ClickOnCard = () => {
    modalClose(false);
  };

  return (
    <BACKDROP_DIV>
      <MODAL_DIV>
        <TOP_MODAL_DIV>
          <h3>{name}</h3>
          <BUTTON_CLOSE onClick={ClickOnCard}>x</BUTTON_CLOSE>
        </TOP_MODAL_DIV>
        <CONTENT_DIV>
          <INCREASED_INFO_DIV>
            <img src={img} alt="" />
            <p>{text}</p>
          </INCREASED_INFO_DIV>
          <div className="rightContent">
            <h3>CONTENT</h3>
          </div>
        </CONTENT_DIV>
        <BUTTON_ORDER>
          <button>{price}₴</button>
        </BUTTON_ORDER>
      </MODAL_DIV>
    </BACKDROP_DIV>
  );
}
