import { React, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/index';
import {
  ContentWrapper,
  ClientsWrapper,
  ClientCardWrapper,
  WorkTimeText,
} from './styled/Home.styled';
import myClients from './My_clients/My_clients';
import { Link } from 'react-router-dom';

export const Home = observer(() => {
  const { basketStore } = useStore();
  useEffect(() => {
    basketStore.resetBasket();
  }, [basketStore]);

  return (
    <>
      <ContentWrapper>
        {myClients.map(({ name, id, logoImg, timeWork }) => {
          return (
            <ClientsWrapper key={id}>
              <ClientCardWrapper>
                <Link to={`${name}`}>
                  <img src={logoImg} alt={name} />
                  <WorkTimeText>{timeWork}</WorkTimeText>
                </Link>
              </ClientCardWrapper>
            </ClientsWrapper>
          );
        })}
      </ContentWrapper>
    </>
  );
});
