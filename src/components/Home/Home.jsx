import { React, useEffect } from 'react';
import {
  ContentWrapper,
  ClientsWrapper,
  ClientCardWrapper,
  WorkTimeText,
} from './styled/Home.styled';
import myClients from './My_clients/My_clients';
import { Link } from 'react-router-dom';

export function Home({ arr }) {
  useEffect(() => {
    arr([]);
  }, [arr]);

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
}
