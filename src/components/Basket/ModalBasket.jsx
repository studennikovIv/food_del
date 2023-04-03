import { BACKDROP_DIV } from '../Menu/card/styled/ModalCard.styled';
import { CardBasket } from './card/BasketCard.jsx';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  BASKET_DIV,
  TOP_DIV,
  BASKET_H3,
  BOTTOM_DIV,
  TEXT_ARR_EMPTY_P,
  BUTTONE_CLOSE,
  CONTEINER_SUM_DIV,
  SUM_P,
  DELIVERY_P,
  CONTEINER_BTN_DIV,
  LEFT_BUTTON,
  RIGHT_BUTTON,
  CLIENT_FORM,
  CLIENT_LI,
  CLIENT_LABEL,
  CLIENT_SMALL,
  CLIENT_SUP,
  CLIENT_INPUT,
  CLIENT_H3,
  CLIENT_SELECT,
} from './styled/ModalBasket.styled';

export function ModalBasket({ basketArr, modalClose }) {
  const [currentActive, setActive] = useState(null);
  const [cart, setCart] = useState([...basketArr]);

  const closeButton = () => {
    modalClose(false);
  };

  const handleAdd = basketArr => {
    const existingProduct = cart.find(p => p.name === basketArr.name);
    if (existingProduct) {
      setCart(
        cart.map(p => {
          if (p.name === basketArr.name) {
            return { ...p, span: p.span + 1 };
          } else {
            return p;
          }
        })
      );
    } else {
      setCart([...cart, { ...basketArr, span: 1 }]);
    }
  };
  const handleRemove = basketArr => {
    const existingProduct = cart.find(p => p.name === basketArr.name);
    if (existingProduct.span === 1) {
      setCart(cart.filter(p => p.name !== basketArr.name));
    } else {
      setCart(
        cart.map(p => {
          if (p.name === basketArr.name) {
            return { ...p, span: p.span - 1 };
          } else {
            return p;
          }
        })
      );
    }
  };
  console.log(cart);
  const total = cart.reduce((acc, p) => acc + p.price * p.span, 0);

  return (
    <BACKDROP_DIV>
      <BASKET_DIV>
        <TOP_DIV>
          <BASKET_H3>Кошик</BASKET_H3>
          <BUTTONE_CLOSE onClick={closeButton}>×</BUTTONE_CLOSE>
        </TOP_DIV>
        <BOTTOM_DIV>
          {basketArr.length === 0 && (
            <TEXT_ARR_EMPTY_P>У вашому кошику порожньо!</TEXT_ARR_EMPTY_P>
          )}
          {basketArr &&
            cart.map(obj => (
              <CardBasket
                key={nanoid()}
                plus={handleAdd}
                basketArr={obj}
                minus={handleRemove}
                arr={cart}
              />
            ))}
          {/* <CardBasket basketArr={basketArr} /> */}
          {basketArr.length !== 0 && (
            <>
              <CONTEINER_SUM_DIV>
                <SUM_P>Сумма:{total}</SUM_P>
                <DELIVERY_P>Доставка:50грн</DELIVERY_P>
                <SUM_P>До сплати:{total + 50}</SUM_P>
              </CONTEINER_SUM_DIV>
              <CONTEINER_BTN_DIV>
                <LEFT_BUTTON>Продовжіти покупки</LEFT_BUTTON>
                <RIGHT_BUTTON>Оформити замовлення</RIGHT_BUTTON>
              </CONTEINER_BTN_DIV>
            </>
          )}
          <div>
            <CLIENT_H3>Оформлення замовлення</CLIENT_H3>
            <CLIENT_FORM>
              <ul>
                <CLIENT_LI>
                  <CLIENT_LABEL htmlFor="telephone">
                    <CLIENT_SMALL
                      className={currentActive === true ? 'active' : null}
                    >
                      Телефон 380000000000
                    </CLIENT_SMALL>
                    <CLIENT_SUP
                      className={currentActive === true ? 'active' : null}
                    >
                      *
                    </CLIENT_SUP>
                  </CLIENT_LABEL>
                  <CLIENT_INPUT
                    onBlur={() => setActive(null)}
                    onChange={() => setActive(true)}
                    onClick={() => setActive(true)}
                    type="number"
                    name="telephone"
                    pattern="[0-9]*"
                    required
                  />
                </CLIENT_LI>

                <CLIENT_LI>
                  <CLIENT_LABEL htmlFor="telephone">
                    <CLIENT_SMALL
                      className={currentActive === true ? 'active' : null}
                    >
                      Ім'я
                    </CLIENT_SMALL>
                    <CLIENT_SUP
                      className={currentActive === true ? 'active' : null}
                    >
                      *
                    </CLIENT_SUP>
                  </CLIENT_LABEL>
                  <CLIENT_INPUT
                    onBlur={() => setActive(null)}
                    onChange={() => setActive(true)}
                    onClick={() => setActive(true)}
                    type="name"
                    name="telephone"
                    pattern="[0-9]*"
                    required
                  />
                </CLIENT_LI>

                <CLIENT_LI>
                  <CLIENT_LABEL htmlFor="telephone">
                    <CLIENT_SMALL className={'active'}>Місто</CLIENT_SMALL>
                    <CLIENT_SUP className={'active'}>*</CLIENT_SUP>
                  </CLIENT_LABEL>
                  <CLIENT_SELECT>
                    <option>Павлоград</option>
                  </CLIENT_SELECT>
                </CLIENT_LI>
                <CLIENT_LI>
                  <CLIENT_LABEL htmlFor="telephone">
                    <CLIENT_SMALL
                      className={currentActive === true ? 'active' : null}
                    >
                      Вулиця
                    </CLIENT_SMALL>
                    <CLIENT_SUP
                      className={currentActive === true ? 'active' : null}
                    >
                      *
                    </CLIENT_SUP>
                  </CLIENT_LABEL>
                  <CLIENT_INPUT
                    onBlur={() => setActive(null)}
                    onChange={() => setActive(true)}
                    onClick={() => setActive(true)}
                    type="name"
                    name="telephone"
                    pattern="[0-9]*"
                    required
                  />
                </CLIENT_LI>
              </ul>
            </CLIENT_FORM>
          </div>
        </BOTTOM_DIV>
      </BASKET_DIV>
    </BACKDROP_DIV>
  );
}
