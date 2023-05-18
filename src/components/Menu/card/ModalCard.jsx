import {
  BACKDROP_DIV,
  MODAL_DIV,
  TOP_MODAL_DIV,
  BUTTON_CLOSE,
  CONTENT_DIV,
  INCREASED_INFO_DIV,
  BUTTON_ORDER,
  SUPPLEMENTS_DIV,
  SUPPLEMENTS_UL,
  SUPPLEMENTS_LI,
  SUPPLEMENTS_NAME,
  CHECKBOX_DIV,
  CHECKBOX_INPUT,
  CHECKBOX_LABEL,
} from './styled/ModalCard.styled';

export function ModalCard({
  modalClose,
  img,
  name,
  price,
  text,
  clickAddBasket,
  dops,
}) {
  const ClickOnCard = () => {
    modalClose(false);
  };

  const addBasket = () => {
    clickAddBasket(img, name, price, text);
    ClickOnCard();
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
            <img src={img} alt={name} />
            <p>{text}</p>
          </INCREASED_INFO_DIV>
          <SUPPLEMENTS_DIV>
            {dops.map(({ name, list }) => {
              return (
                <SUPPLEMENTS_UL key={name}>
                  <SUPPLEMENTS_LI>
                    <SUPPLEMENTS_NAME>{name}: </SUPPLEMENTS_NAME>
                    {list.map(({ name, price }) => {
                      return (
                        <CHECKBOX_DIV className="custom-checkbox" key={name}>
                          <CHECKBOX_INPUT type="checkbox" id="my-checkbox" />
                          <CHECKBOX_LABEL htmlFor="my-checkbox">
                            {name}
                          </CHECKBOX_LABEL>
                          <p>{price}$</p>
                        </CHECKBOX_DIV>
                      );
                    })}
                  </SUPPLEMENTS_LI>
                </SUPPLEMENTS_UL>
              );
            })}
          </SUPPLEMENTS_DIV>
        </CONTENT_DIV>
        <div></div>

        <BUTTON_ORDER>
          <button onClick={addBasket}>{price}₴</button>
        </BUTTON_ORDER>
      </MODAL_DIV>
    </BACKDROP_DIV>
  );
}
