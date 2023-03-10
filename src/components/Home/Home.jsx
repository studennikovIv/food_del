import React from 'react';
import { CONTENT_DIV, CLIENTS_DIV, CARD_DIV } from './styled/Home.styled';
import myClients from './My_clients/My_clients';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <CONTENT_DIV>
        {myClients.map(({ name, id, logoImg }) => {
          return (
            <CLIENTS_DIV key={id}>
              <Link to={`${name}`}>
                <CARD_DIV>
                  <img src={logoImg} alt={name} />
                </CARD_DIV>
              </Link>
            </CLIENTS_DIV>
          );
        })}
      </CONTENT_DIV>
    </>
  );
}
