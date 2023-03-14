import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BESIC_CONTAINER_DIV } from './App.styled';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { ModalCard } from './components/Menu/card/ModalCard';
import { ModalBasket } from 'components/Basket/ModalBasket';
import { Footer } from 'components/Footer/Footer';

// KFC
import menuKFC from './components/MenuAllBookmarks/KFC/KFC.jsx';
// Pizza Day;
import menuPizza from './components/MenuAllBookmarks/PizzaDay/pizzaDay';
// SushiFamily
import menuSushiFamily from './components/MenuAllBookmarks/SushiFamily/SushiFamily.jsx';
// Shaurmichka
import menuShaurmichka from './components/MenuAllBookmarks/Shaurmichka/Shaurmichka.jsx';
// MaCherie
import menuMaCherie from 'components/MenuAllBookmarks/MaCherie/MaCherie.jsx';
// SushiZoom
import menuSushiZoom from 'components/MenuAllBookmarks/SushiZoom/menuSushiZoom.jsx';
// Osama Sushi
import menuOsamaSushi from 'components/MenuAllBookmarks/OsamaSushi/OsamaSushi.jsx';

function App() {
  const [modalCard, useModalCard] = useState(false);
  const [imgModal, useImgModal] = useState('');
  const [nameModal, useNameModal] = useState('');
  const [priceModal, usePriceModal] = useState('');
  const [textModal, useTextModal] = useState('');

  // Modal Basket

  const [modalBasket, useModalBasket] = useState(false);

  const ClickOnCard = (bool, img, name, price, text) => {
    useModalCard(bool);
    console.log(img, name, price, text);
    useImgModal(img);
    useNameModal(name);
    usePriceModal(price);
    useTextModal(text);
  };
  const CloseModal = () => {
    useModalCard(false);
  };
  const OpenBusket = bool => {
    useModalBasket(bool);
  };
  return (
    <>
      <Header openBusket={OpenBusket} />
      <BESIC_CONTAINER_DIV>
        <Routes>
          <Route path="/food_del" element={<Home />} />
          <Route
            path="/food_del/KFC"
            element={<Menu prop={menuKFC} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/food_del/PizzaDay"
            element={<Menu prop={menuPizza} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/food_del/Shaurmichka"
            element={<Menu prop={menuShaurmichka} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/food_del/SushiFamily"
            element={<Menu prop={menuSushiFamily} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/food_del/MaCherie"
            element={<Menu prop={menuMaCherie} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/food_del/SushiZoom"
            element={<Menu prop={menuSushiZoom} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/food_del/OsamaSushi"
            element={<Menu prop={menuOsamaSushi} clickOnCard={ClickOnCard} />}
          />
        </Routes>
      </BESIC_CONTAINER_DIV>
      <Footer />
      {modalCard && (
        <ModalCard
          modalClose={CloseModal}
          img={imgModal}
          name={nameModal}
          price={priceModal}
          text={textModal}
        />
      )}
      {modalBasket && <ModalBasket />}
    </>
  );
}

export default App;
