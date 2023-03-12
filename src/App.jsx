import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BESIC_CONTAINER_DIV } from './App.styled';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { ModalCard } from './components/Menu/card/ModalCard';
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

  const ClickOnCard = () => {
    useModalCard(true);
  };
  const CloseModal = () => {
    useModalCard(false);
  };
  return (
    <>
      <Header />
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
      {modalCard && <ModalCard modalClose={CloseModal} />}
    </>
  );
}

export default App;
