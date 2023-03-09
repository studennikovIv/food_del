import React from 'react';
import css from './styled/Home.module.css';
import myClients from './myClients/myClients';
import { Link } from 'react-router-dom';
const Home = () => {
  const { card, conteinerCard, linkClient } = css;
  return (
    <>
      <div className={conteinerCard}>
        {myClients.map(({ name, id, logoImg }) => {
          return (
            <Link className={linkClient} to={`${name}`} key={id}>
              <div className={card}>
                <img src={logoImg} alt={name} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
