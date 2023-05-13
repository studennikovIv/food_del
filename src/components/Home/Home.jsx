import { React, useEffect } from 'react';
import {
  CONTENT_DIV,
  CLIENTS_DIV,
  CARD_DIV,
  TIME_WORL_DIV,
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
              <Link to={`${name}`}>
                <CARD_DIV>
                  <img src={logoImg} alt={name} />
                  <TIME_WORL_DIV>
                    {' '}
                    <p>{timeWork}</p>
                  </TIME_WORL_DIV>
                </CARD_DIV>
              </Link>
            </CLIENTS_DIV>
          );
        })}
      </CONTENT_DIV>
    </>
  );
}
