import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { botService } from 'services/botService';
// import styled from '../styled/ModalBasket.styled.jsx';
import {
  ClientH3,
  ClientForm,
  ClientConteinerStreetDiv,
  ClientUl,
  ClientLi,
  ClientLabel,
  ClientSmall,
  ClientSup,
  ClientInput,
  ClientSelect,
  ConteinerClientSumDiv,
  SumClientP,
  DeliveryClientP,
  ConteinerBtnClientDiv,
  LeftClientButton,
  RightClientButton,
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

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const kafe = location.pathname;

  const onSubmit = async e => {
    // e.preventDefault();
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
      <ClientForm onSubmit={handleSubmit(onSubmit)}>
        <ClientUl>
          <ClientLi>
            <ClientLabel htmlFor="telephone">
              <ClientSmall
                className={
                  phoneActive === true || changeTel !== '' ? 'active' : null
                }
              >
                Телефон 380000000000
              </ClientSmall>
              <ClientSup
                className={
                  phoneActive === true || changeTel !== '' ? 'active' : null
                }
              >
                *
              </ClientSup>
            </ClientLabel>
            <ClientInput
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
          </ClientLi>
          <ClientLi>
            <ClientLabel htmlFor="telephone">
              <ClientSmall className={'active'}>Місто</ClientSmall>
              <ClientSup className={'active'}>*</ClientSup>
            </ClientLabel>
            <ClientSelect>
              <option>Павлоград</option>
            </ClientSelect>
          </ClientLi>
          <ClientConteinerStreetDiv>
            <ClientLi>
              <ClientLabel htmlFor="streat">
                <ClientSmall
                  className={
                    streatActive === true || changeStreat !== ''
                      ? 'active'
                      : null
                  }
                >
                  Вулиця
                </ClientSmall>
                <ClientSup
                  className={
                    streatActive === true || changeStreat !== ''
                      ? 'active'
                      : null
                  }
                >
                  *
                </ClientSup>
              </ClientLabel>
              <ClientInput
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
            </ClientLi>

            <ClientLi>
              <ClientLabel htmlFor="house">
                <ClientSmall
                  className={
                    houseActive === true || changeHouse !== '' ? 'active' : null
                  }
                >
                  Будинок
                </ClientSmall>
                <ClientSup
                  className={
                    houseActive === true || changeHouse !== '' ? 'active' : null
                  }
                >
                  *
                </ClientSup>
              </ClientLabel>
              <ClientInput
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
            </ClientLi>
          </ClientConteinerStreetDiv>

          <ClientLi>
            <ClientLabel htmlFor="coments">
              <ClientSmall
                className={
                  comentsActive === true || changeComents !== ''
                    ? 'active'
                    : null
                }
              >
                Коментар
              </ClientSmall>
            </ClientLabel>
            <ClientInput
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
          </ClientLi>
        </ClientUl>
        <ConteinerClientSumDiv>
          <SumClientP>Сумма:{total}</SumClientP>
          <DeliveryClientP>Доставка:50грн</DeliveryClientP>
          <SumClientP>До сплати:{total + 50}</SumClientP>
        </ConteinerClientSumDiv>
        <ConteinerBtnClientDiv>
          <LeftClientButton
            onClick={e => {
              e.preventDefault();
              basketFormClient(false);
            }}
          >
            Назад
          </LeftClientButton>
          <RightClientButton>Відправити замовлення</RightClientButton>
        </ConteinerBtnClientDiv>
      </ClientForm>
    </>
  );
}
