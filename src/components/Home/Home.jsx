import { React, useEffect } from 'react';
import {
  CONTENT_DIV,
  CLIENTS_DIV,
  CARD_DIV,
  TIME_WORL_P,
} from './styled/Home.styled';
import myClients from './My_clients/My_clients';
import { Link } from 'react-router-dom';

export function Home({ arr }) {
  useEffect(() => {
    arr([]);
  }, [arr]);
  return (
    <>
      <CONTENT_DIV>
        {myClients.map(({ name, id, logoImg, timeWork }) => {
          return (
            <CLIENTS_DIV key={id}>
              <CARD_DIV>
                <Link to={`${name}`}>
                  <img src={logoImg} alt={name} />
                  <TIME_WORL_P>{timeWork}</TIME_WORL_P>
                </Link>
              </CARD_DIV>
            </CLIENTS_DIV>
          );
        })}
      </CONTENT_DIV>
    </>
  );
}
