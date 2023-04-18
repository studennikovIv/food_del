import { useState } from 'react';
import { sendMessage } from 'components/botTg';
import { useLocation } from 'react-router-dom';

import {
  CLIENT_FORM,
  CLIENT_UL,
  CLIENT_LI,
  CLIENT_LABEL,
  CLIENT_SMALL,
  CLIENT_SUP,
  CLIENT_INPUT,
  CLIENT_H3,
  CLIENT_SELECT,
  CLIENT_CONTEINER_STREET_DIV,
  CONTEINER_CLIENT_SUM_DIV,
  SUM_CLIENT_P,
  DELIVERY_CLIENT_P,
  CONTEINER_BTN_CLIENT_DIV,
  LEFT_CLIENT_BUTTON,
  RIGHT_CLIENT_BUTTON,
} from '../styled/ModalBasket.styled.jsx';

export function BasketFormClient({
  food,
  total,
  resetBasket,
  basketFormClient,
}) {
  const [changeTel, setChangeTel] = useState('');
  const [changeStreat, setChangeStreat] = useState('');
  const [changeHouse, setChangeHouse] = useState('');
  const [changeComents, setChangeComents] = useState('');
  const [phoneActive, setPhoneActive] = useState(null);
  const [streatActive, setStreatActive] = useState(null);
  const [houseActive, setHouseActive] = useState(null);
  const [comentsActive, setComentsActive] = useState(null);

  const location = useLocation();
  const kafe = location.pathname;

  return (
    <>
      <CLIENT_H3>Оформлення замовлення</CLIENT_H3>
      <CLIENT_FORM
        method="post"
        onSubmit={e => {
          e.preventDefault();
          sendMessage(
            changeTel,
            changeStreat,
            changeHouse,
            changeComents,
            food,
            total,
            kafe
          );
          setChangeTel('');
          e.target.elements.telephone.value = '';
          resetBasket([]);
        }}
      >
        <CLIENT_UL>
          <CLIENT_LI>
            <CLIENT_LABEL htmlFor="telephone">
              <CLIENT_SMALL
                className={
                  phoneActive === true || changeTel !== '' ? 'active' : null
                }
              >
                Телефон 380000000000
              </CLIENT_SMALL>
              <CLIENT_SUP
                className={
                  phoneActive === true || changeTel !== '' ? 'active' : null
                }
              >
                *
              </CLIENT_SUP>
            </CLIENT_LABEL>
            <CLIENT_INPUT
              onBlur={() => setPhoneActive(null)}
              onChange={e => {
                setPhoneActive(true);
                setChangeTel(e.target.value);
              }}
              onClick={() => setPhoneActive(true)}
              type="number"
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
          <CLIENT_CONTEINER_STREET_DIV>
            <CLIENT_LI>
              <CLIENT_LABEL htmlFor="streat">
                <CLIENT_SMALL
                  className={
                    streatActive === true || changeStreat !== ''
                      ? 'active'
                      : null
                  }
                >
                  Вулиця
                </CLIENT_SMALL>
                <CLIENT_SUP
                  className={
                    streatActive === true || changeStreat !== ''
                      ? 'active'
                      : null
                  }
                >
                  *
                </CLIENT_SUP>
              </CLIENT_LABEL>
              <CLIENT_INPUT
                onBlur={() => setStreatActive(null)}
                onChange={e => {
                  setStreatActive(true);
                  setChangeStreat(e.target.value);
                }}
                onClick={() => {
                  setStreatActive(true);
                }}
                type="text"
                name="streat"
                pattern="*"
                required
              />
            </CLIENT_LI>

            <CLIENT_LI>
              <CLIENT_LABEL htmlFor="house">
                <CLIENT_SMALL
                  className={
                    houseActive === true || changeHouse !== '' ? 'active' : null
                  }
                >
                  Будинок
                </CLIENT_SMALL>
                <CLIENT_SUP
                  className={
                    houseActive === true || changeHouse !== '' ? 'active' : null
                  }
                >
                  *
                </CLIENT_SUP>
              </CLIENT_LABEL>
              <CLIENT_INPUT
                onBlur={() => setHouseActive(null)}
                onChange={e => {
                  setHouseActive(true);
                  setChangeHouse(e.target.value);
                }}
                onClick={() => {
                  setHouseActive(true);
                }}
                type="text"
                name="house"
                pattern="*"
                required
              />
            </CLIENT_LI>
          </CLIENT_CONTEINER_STREET_DIV>

          <CLIENT_LI>
            <CLIENT_LABEL htmlFor="coments">
              <CLIENT_SMALL
                className={
                  comentsActive === true || changeComents !== ''
                    ? 'active'
                    : null
                }
              >
                Коментар
              </CLIENT_SMALL>
            </CLIENT_LABEL>
            <CLIENT_INPUT
              onBlur={() => setComentsActive(null)}
              onChange={e => {
                setComentsActive(true);
                setChangeComents(e.target.value);
              }}
              onClick={() => setComentsActive(true)}
              type="text"
              name="coments"
              pattern="*"
            />
          </CLIENT_LI>
        </CLIENT_UL>
        <CONTEINER_CLIENT_SUM_DIV>
          <SUM_CLIENT_P>Сумма:{total}</SUM_CLIENT_P>
          <DELIVERY_CLIENT_P>Доставка:50грн</DELIVERY_CLIENT_P>
          <SUM_CLIENT_P>До сплати:{total + 50}</SUM_CLIENT_P>
        </CONTEINER_CLIENT_SUM_DIV>
        <CONTEINER_BTN_CLIENT_DIV>
          <LEFT_CLIENT_BUTTON
            onClick={e => {
              e.preventDefault();
              basketFormClient(false);
            }}
          >
            Назад
          </LEFT_CLIENT_BUTTON>
          <RIGHT_CLIENT_BUTTON>Відправити замовлення</RIGHT_CLIENT_BUTTON>
        </CONTEINER_BTN_CLIENT_DIV>
      </CLIENT_FORM>
    </>
  );
}
