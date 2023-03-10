import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BESIC_CONTAINER_DIV } from './App.styled';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
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
  return (
    <>
      <Header />
      <BESIC_CONTAINER_DIV>
        <Routes>
          <Route path="/food_del" element={<Home />} />
          <Route path="/food_del/KFC" element={<Menu prop={menuKFC} />} />
          <Route
            path="/food_del/PizzaDay"
            element={<Menu prop={menuPizza} />}
          />
          <Route
            path="/food_del/Shaurmichka"
            element={<Menu prop={menuShaurmichka} />}
          />
          <Route
            path="/food_del/SushiFamily"
            element={<Menu prop={menuSushiFamily} />}
          />
          <Route
            path="/food_del/MaCherie"
            element={<Menu prop={menuMaCherie} />}
          />
          <Route
            path="/food_del/SushiZoom"
            element={<Menu prop={menuSushiZoom} />}
          />
          <Route
            path="/food_del/OsamaSushi"
            element={<Menu prop={menuOsamaSushi} />}
          />
        </Routes>
      </BESIC_CONTAINER_DIV>
      <Footer />
    </>
  );
}

export default App;
