import React, { useState, useEffect } from 'react';
// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BESIC_CONTAINER_DIV, UP_BUTTON } from './App.styled';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { ModalCard } from './components/Menu/card/ModalCard';
import { ModalBasket } from 'components/Basket/ModalBasket';
import { Footer } from 'components/Footer/Footer';

// KFC
// import menuKFC from './components/MenuAllBookmarks/KFC/KFC.jsx';
import MenuKFC from './components/MenuAllBookmarks/KFC/KFC.json';
// Pizza Day;
import MenuPizza from './components/MenuAllBookmarks/PizzaDay/pizzaDay.json';
// SushiFamily
import MenuSushiFamily from './components/MenuAllBookmarks/SushiFamily/SushiFamily.json';
// Shaurmichka
import MenuShaurmichka from './components/MenuAllBookmarks/Shaurmichka/Shaurmichka.json';
// MaCherie
import MenuMaCherie from 'components/MenuAllBookmarks/MaCherie/MaCherie.json';
// SushiZoom
// import menuSushiZoom from 'components/MenuAllBookmarks/SushiZoom/menuSushiZoom.jsx';
// Osama Sushi
// import menuOsamaSushi from 'components/MenuAllBookmarks/OsamaSushi/OsamaSushi.jsx';
// MyPlace
import MenuMyPlace from './components/MenuAllBookmarks/MyPlace/MyPlace.json';
// Laziz
import MenuLaziz from 'components/MenuAllBookmarks/Laziz/Laziz.json';
// Sempai
import Sempai from './components/MenuAllBookmarks/Sempai/Sempai.json';
import arrow_top from './images/arrow-top-svgrepo.svg';

// const Menu = lazy(() =>
//   import('./components/Menu/Menu').then(module => {
//     // console.log(module);
//     return { ...module, default: module.Menu };
//   })
// );
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalCard, useModalCard] = useState(false);
  const [imgModal, useImgModal] = useState('');
  const [nameModal, useNameModal] = useState('');
  const [priceModal, usePriceModal] = useState('');
  const [textModal, useTextModal] = useState('');
  const [dops, setDops] = useState([]);
  // Modal Basket

  const [modalBasket, setModalBasket] = useState(false);
  const [basketArr, setBasketArr] = useState([]);
  const [basketItem, setBasketItem] = useState();

  useEffect(() => {
    const body = document.querySelector('body');
    if (modalBasket) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [modalBasket]);

  const ClickOnCard = (bool, img, name, price, text, dopsOpen) => {
    useModalCard(bool);
    useImgModal(img);
    useNameModal(name);
    usePriceModal(price);
    useTextModal(text);
    setDops(dopsOpen);
  };

  useEffect(() => {
    document.title = `Food Delivery`;
    basketArr.forEach((item, index) => {
      for (let i = index + 1; i < basketArr.length; i++) {
        if (item.name === basketArr[i].name) {
          item.span++;
          basketArr.splice(i, 1);
          i--;
        }
      }
    });
  }, [basketArr, basketItem]);
  const handleAdd = obj => {
    const existingProduct = basketArr.find(p => p.name === obj.name);
    if (existingProduct) {
      setBasketArr(
        basketArr.map(p => {
          if (p.name === obj.name) {
            return { ...p, span: p.span + 1 };
          } else {
            return p;
          }
        })
      );
    } else {
      setBasketArr([...basketArr, { ...obj, span: 1 }]);
    }
  };
  const handleRemove = obj => {
    const existingProduct = basketArr.find(p => p.name === obj.name);
    if (existingProduct.span === 1) {
      setBasketArr(basketArr.filter(p => p.name !== obj.name));
    } else {
      setBasketArr(
        basketArr.map(p => {
          if (p.name === obj.name) {
            return { ...p, span: p.span - 1 };
          } else {
            return p;
          }
        })
      );
    }
  };
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const ClickAddBasket = (img, name, price, text) => {
    let span = 1;
    setBasketItem({ img, name, price, text, span });
    setBasketArr([...basketArr, { img, name, price, text, span }]);
  };

  const CloseModal = () => {
    useModalCard(false);
  };

  const OpenBusket = bool => {
    setModalBasket(bool);
  };
  return (
    <>
      <Header openBusket={OpenBusket} />
      <BESIC_CONTAINER_DIV>
        <Routes>
          <Route path="/" element={<Home arr={setBasketArr} />} />
          <Route
            path="/MyPlace"
            element={<Menu prop={MenuMyPlace} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/SushiFamily"
            element={<Menu prop={MenuSushiFamily} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/MaCherie"
            element={<Menu prop={MenuMaCherie} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/KFC"
            element={<Menu prop={MenuKFC} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/PizzaDay"
            element={<Menu prop={MenuPizza} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/Shaurmichka"
            element={<Menu prop={MenuShaurmichka} clickOnCard={ClickOnCard} />}
          />

          <Route
            path="/Laziz"
            element={<Menu prop={MenuLaziz} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/Sempai"
            element={<Menu prop={Sempai} clickOnCard={ClickOnCard} />}
          />
          {/* <Route
            path="/food_del/SushiZoom"
            element={<Menu prop={menuSushiZoom} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/food_del/OsamaSushi"
            element={<Menu prop={menuOsamaSushi} clickOnCard={ClickOnCard} />}
          /> */}
        </Routes>
      </BESIC_CONTAINER_DIV>
      <Footer />
      {modalCard && (
        <ModalCard
          basketArr={basketArr}
          clickAddBasket={ClickAddBasket}
          modalClose={CloseModal}
          img={imgModal}
          name={nameModal}
          price={priceModal}
          text={textModal}
          dops={dops}
        />
      )}
      {modalBasket && (
        <ModalBasket
          reset={setBasketArr}
          basketArr={basketArr}
          modalClose={setModalBasket}
          plus={handleAdd}
          minus={handleRemove}
        />
      )}{' '}
      {isVisible && (
        <UP_BUTTON
          className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <img src={arrow_top} alt="arrow_top" />
        </UP_BUTTON>
      )}
    </>
  );
};

export default App;
