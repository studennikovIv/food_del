import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { botService } from 'services/botService';

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

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const kafe = location.pathname;

  const onSubmit = async () => {
    e.preventDefault();
    await botService.sendMessage(
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
  };

  return (
    <>
      <clientForm onSubmit={handleSubmit(onSubmit)}>
        <clientUl>
          <clientLi>
            <clientLabel htmlFor="telephone">
              <clientSmall
                className={
                  phoneActive === true || changeTel !== '' ? 'active' : null
                }
              >
                Телефон 380000000000
              </clientSmall>
              <clientSup
                className={
                  phoneActive === true || changeTel !== '' ? 'active' : null
                }
              >
                *
              </clientSup>
            </clientLabel>
            <clientInput
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
          </clientLi>
          <clientLi>
            <clientLabel htmlFor="telephone">
              <clientSmall className={'active'}>Місто</clientSmall>
              <clientSup className={'active'}>*</clientSup>
            </clientLabel>
            <clientSelect>
              <option>Павлоград</option>
            </clientSelect>
          </clientLi>
          <clientConteinerStreetDiv>
            <clientLi>
              <clientLabel htmlFor="streat">
                <clientSmall
                  className={
                    streatActive === true || changeStreat !== ''
                      ? 'active'
                      : null
                  }
                >
                  Вулиця
                </clientSmall>
                <clientSup
                  className={
                    streatActive === true || changeStreat !== ''
                      ? 'active'
                      : null
                  }
                >
                  *
                </clientSup>
              </clientLabel>
              <clientInput
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
                pattern=".*"
                required
              />
            </clientLi>

            <clientLi>
              <clientLabel htmlFor="house">
                <clientSmall
                  className={
                    houseActive === true || changeHouse !== '' ? 'active' : null
                  }
                >
                  Будинок
                </clientSmall>
                <clientSup
                  className={
                    houseActive === true || changeHouse !== '' ? 'active' : null
                  }
                >
                  *
                </clientSup>
              </clientLabel>
              <clientInput
                onBlur={() => setHouseActive(null)}
                onChange={e => {
                  setHouseActive(true);
                  setChangeHouse(e.target.value);
                }}
                onClick={() => {
                  setHouseActive(true);
                }}
                type="number"
                name="house"
                pattern=".*"
                required
              />
            </clientLi>
          </clientConteinerStreetDiv>

          <clientLi>
            <clientLabel htmlFor="coments">
              <clientSmall
                className={
                  comentsActive === true || changeComents !== ''
                    ? 'active'
                    : null
                }
              >
                Коментар
              </clientSmall>
            </clientLabel>
            <clientInput
              onBlur={() => setComentsActive(null)}
              onChange={e => {
                setComentsActive(true);
                setChangeComents(e.target.value);
              }}
              onClick={() => setComentsActive(true)}
              type="text"
              name="coments"
              pattern=".*"
            />
          </clientLi>
        </clientUl>
        <conteinerClientSumDiv>
          <sumClientP>Сумма:{total}</sumClientP>
          <deliveryClientP>Доставка:50грн</deliveryClientP>
          <sumClientP>До сплати:{total + 50}</sumClientP>
        </conteinerClientSumDiv>
        <conteinerBtnClientDiv>
          <leftClientButton
            onClick={e => {
              e.preventDefault();
              basketFormClient(false);
            }}
          >
            Назад
          </leftClientButton>
          <rightClientButton>Відправити замовлення</rightClientButton>
        </conteinerBtnClientDiv>
      </clientForm>
    </>
  );
}
