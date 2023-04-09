import { useState } from 'react';
import { sendMessage } from 'components/botTg';
import { useLocation } from 'react-router-dom';
import {
  CLIENT_FORM,
  CLIENT_LI,
  CLIENT_LABEL,
  CLIENT_SMALL,
  CLIENT_SUP,
  CLIENT_INPUT,
  CLIENT_H3,
  // CLIENT_SELECT,
} from '../styled/ModalBasket.styled';

export function BasketFormClient({ prop, total }) {
  const [changeTel, setChangeTel] = useState('');
  const [phoneActive, setPhoneActive] = useState(null);
  // const [nameActive, setNameActive] = useState(null);
  // const [streatActive, setStreatActive] = useState(null);
  // const [houseActive, setHouseActive] = useState(null);
  // const [entranceActive, setEntranceActive] = useState(null);
  // const [overActive, setOverActive] = useState(null);
  // const [apartmentActive, setApartmentActive] = useState(null);
  // const [commentActive, setCommentActive] = useState(null);

  const location = useLocation();
  const kafe = location.pathname;

  return (
    <div>
      <CLIENT_H3>Оформлення замовлення</CLIENT_H3>
      <CLIENT_FORM
        method="post"
        onSubmit={e => {
          e.preventDefault();
          sendMessage(changeTel, prop, total, kafe);
        }}
      >
        <ul>
          <CLIENT_LI>
            <CLIENT_LABEL htmlFor="telephone">
              <CLIENT_SMALL className={phoneActive === true ? 'active' : null}>
                Телефон 380000000000
              </CLIENT_SMALL>
              <CLIENT_SUP className={phoneActive === true ? 'active' : null}>
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

          {/* <CLIENT_LI>
            <CLIENT_LABEL htmlFor="telephone">
              <CLIENT_SMALL className={nameActive === true ? 'active' : null}>
                Ім'я
              </CLIENT_SMALL>
              <CLIENT_SUP className={nameActive === true ? 'active' : null}>
                *
              </CLIENT_SUP>
            </CLIENT_LABEL>
            <CLIENT_INPUT
              onBlur={() => setNameActive(null)}
              onChange={() => setNameActive(true)}
              onClick={() => setNameActive(true)}
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
              <CLIENT_SMALL className={streatActive === true ? 'active' : null}>
                Вулиця
              </CLIENT_SMALL>
              <CLIENT_SUP className={streatActive === true ? 'active' : null}>
                *
              </CLIENT_SUP>
            </CLIENT_LABEL>
            <CLIENT_INPUT
              onBlur={() => setStreatActive(null)}
              onChange={() => setStreatActive(true)}
              onClick={() => setStreatActive(true)}
              type="name"
              name="telephone"
              pattern="[0-9]*"
              required
            />
          </CLIENT_LI>
          <CLIENT_LI>
            <CLIENT_LABEL htmlFor="telephone">
              <CLIENT_SMALL className={houseActive === true ? 'active' : null}>
                Будинок
              </CLIENT_SMALL>
              <CLIENT_SUP className={houseActive === true ? 'active' : null}>
                *
              </CLIENT_SUP>
            </CLIENT_LABEL>
            <CLIENT_INPUT
              onBlur={() => setHouseActive(null)}
              onChange={() => setHouseActive(true)}
              onClick={() => setHouseActive(true)}
              type="name"
              name="telephone"
              pattern="[0-9]*"
              required
            />
          </CLIENT_LI>

          <CLIENT_LI>
            <CLIENT_LABEL htmlFor="telephone">
              <CLIENT_SMALL
                className={entranceActive === true ? 'active' : null}
              >
                Під'їзд
              </CLIENT_SMALL>
              <CLIENT_SUP className={entranceActive === true ? 'active' : null}>
                *
              </CLIENT_SUP>
            </CLIENT_LABEL>
            <CLIENT_INPUT
              onBlur={() => setEntranceActive(null)}
              onChange={() => setEntranceActive(true)}
              onClick={() => setEntranceActive(true)}
              type="name"
              name="telephone"
              pattern="[0-9]*"
              required
            />
          </CLIENT_LI>
          <CLIENT_LI>
            <CLIENT_LABEL htmlFor="telephone">
              <CLIENT_SMALL className={overActive === true ? 'active' : null}>
                Поверх
              </CLIENT_SMALL>
              <CLIENT_SUP className={overActive === true ? 'active' : null}>
                *
              </CLIENT_SUP>
            </CLIENT_LABEL>
            <CLIENT_INPUT
              onBlur={() => setOverActive(null)}
              onChange={() => setOverActive(true)}
              onClick={() => setOverActive(true)}
              type="name"
              name="telephone"
              pattern="[0-9]*"
              required
            />
          </CLIENT_LI>
          <CLIENT_LI>
            <CLIENT_LABEL htmlFor="telephone">
              <CLIENT_SMALL
                className={apartmentActive === true ? 'active' : null}
              >
                Квартира
              </CLIENT_SMALL>
              <CLIENT_SUP
                className={apartmentActive === true ? 'active' : null}
              >
                *
              </CLIENT_SUP>
            </CLIENT_LABEL>
            <CLIENT_INPUT
              onBlur={() => setApartmentActive(null)}
              onChange={() => setApartmentActive(true)}
              onClick={() => setApartmentActive(true)}
              type="name"
              name="telephone"
              pattern="[0-9]*"
              required
            />
          </CLIENT_LI>
          <CLIENT_LI>
            <CLIENT_LABEL htmlFor="telephone">
              <CLIENT_SMALL
                className={commentActive === true ? 'active' : null}
              >
                Коментар
              </CLIENT_SMALL>
              <CLIENT_SUP className={commentActive === true ? 'active' : null}>
                *
              </CLIENT_SUP>
            </CLIENT_LABEL>
            <CLIENT_INPUT
              onBlur={() => setCommentActive(null)}
              onChange={() => setCommentActive(true)}
              onClick={() => setCommentActive(true)}
              type="name"
              name="telephone"
              pattern="[0-9]*"
              required
            />
          </CLIENT_LI> */}
        </ul>
        <button>sunmit</button>
      </CLIENT_FORM>
    </div>
  );
}
