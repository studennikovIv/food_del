import { useState } from 'react';
import {
  CLIENT_FORM,
  CLIENT_LI,
  CLIENT_LABEL,
  CLIENT_SMALL,
  CLIENT_SUP,
  CLIENT_INPUT,
  CLIENT_H3,
  CLIENT_SELECT,
} from '../styled/ModalBasket.styled';

export function BasketFormClient() {
  const [currentActive, setActive] = useState(null);
  return (
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
              <CLIENT_SUP className={currentActive === true ? 'active' : null}>
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
              <CLIENT_SUP className={currentActive === true ? 'active' : null}>
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
              <CLIENT_SUP className={currentActive === true ? 'active' : null}>
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
  );
}
