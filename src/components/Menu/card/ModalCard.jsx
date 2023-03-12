import {
  BACKDROP_DIV,
  MODAL_DIV,
  TOP_MODAL_DIV,
  BUTTON_CLOSE,
} from './styled/ModalCard.styled';

export function ModalCard({ modalClose }) {
  const ClickOnCard = () => {
    modalClose(false);
  };

  return (
    <BACKDROP_DIV>
      <MODAL_DIV>
        <TOP_MODAL_DIV>
          <h3>Name</h3>
          <BUTTON_CLOSE onClick={ClickOnCard}>X</BUTTON_CLOSE>
        </TOP_MODAL_DIV>
        <div className="conteinerContent">
          <div className="leftContent">
            <img src="" alt="" />
            <p>asd</p>
          </div>
          <div className="rightContent">
            <h3>всякоая хуйня</h3>
          </div>
        </div>
      </MODAL_DIV>
    </BACKDROP_DIV>
  );
}
