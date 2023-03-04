import React from 'react';
import './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
// KFC
import menuKFC from './components/KFC/KFC.jsx';
import titleMenuPizzaKFC from './components/KFC/titleMenuKFC.jsx';
// Pizza Day;
import menuPizza from './components/PizzaDay/pizzaDay';
import titleMenuPizzaDay from './components/PizzaDay/titleMenuPizzaDay';
import Menu from './components/Menu/Menu';
// SushiFamily
import menuSushiFamily from './components/SushiFamily/SushiFamily.jsx';
// Shaurmichka
import menuShaurmichka from './components/Shaurmichka/Shaurmichka.jsx';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/food_del" element={<Home />} />
          <Route
            path="/food_del/KFC"
            element={<Menu arrMenu={menuKFC} titleMenu={titleMenuPizzaKFC} />}
          />
          <Route
            path="/food_del/PizzaDay"
            element={<Menu arrMenu={menuPizza} titleMenu={titleMenuPizzaDay} />}
          />
          <Route
            path="/food_del/Shaurmichka"
            element={
              <Menu arrMenu={menuShaurmichka} titleMenu={titleMenuPizzaDay} />
            }
          />
          <Route
            path="/food_del/SushiFamily"
            element={
              <Menu arrMenu={menuSushiFamily} titleMenu={titleMenuPizzaDay} />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
