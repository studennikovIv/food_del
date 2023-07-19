import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/index';
import {
  BasketDropWrapper,
  MODAL_DIV,
  TOP_MODAL_DIV,
  BUTTON_CLOSE,
  CONTENT_DIV,
  INCREASED_INFO_DIV,
  BUTTON_ORDER,
} from './styled/ModalCard.styled';

export const ModalCard = observer(({ modalClose, img, name, price, text }) => {
  const { basketStore } = useStore();
  const ClickOnCard = () => {
    modalClose(false);
  };

  const addBasket = () => {
    basketStore.basketArrAdd(img, name, price, text, 1);
    ClickOnCard();
  };
  const imagePath = require(`../../MenuAllBookmarks/${img}`);
  return (
    <BasketDropWrapper>
      <MODAL_DIV>
        <TOP_MODAL_DIV>
          <h3>{name}</h3>
          <BUTTON_CLOSE onClick={ClickOnCard}>×</BUTTON_CLOSE>
        </TOP_MODAL_DIV>
        <CONTENT_DIV>
          <INCREASED_INFO_DIV>
            <img src={imagePath} alt={name} />
            <p>{text}</p>
          </INCREASED_INFO_DIV>
        </CONTENT_DIV>
        <div></div>

        <BUTTON_ORDER>
          <button onClick={addBasket}>{price}₴</button>
        </BUTTON_ORDER>
      </MODAL_DIV>
    </BasketDropWrapper>
  );
});
