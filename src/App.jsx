import React, { useState, useEffect } from 'react';
// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppWrapper, ToTopBtn } from './App.styled';
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
  const [modalCard, setModalCard] = useState(false);
  const [imgModal, setImgModal] = useState('');
  const [nameModal, setNameModal] = useState('');
  const [priceModal, setPriceModal] = useState('');
  const [textModal, setTextModal] = useState('');
  const [dops, setDops] = useState([]);
  // Modal Basket

  const [modalBasket, setModalBasket] = useState(false);
  const [basketArr, setBasketArr] = useState([]);
  const [basketItem, setBasketItem] = useState();

  useEffect(() => {
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

  useEffect(() => {
    const body = document.querySelector('body');
    if (modalBasket) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [modalBasket]);

  const onClickCardHandler = (bool, img, name, price, text, dopsOpen) => {
    setModalCard(bool);
    setImgModal(img);
    setNameModal(name);
    setPriceModal(price);
    setTextModal(text);
    setDops(dopsOpen);
  };

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

  const clickBasketHandler = (img, name, price, text) => {
    let span = 1;
    setBasketItem({ img, name, price, text, span });
    setBasketArr([...basketArr, { img, name, price, text, span }]);
  };

  const closeModal = () => {
    setModalCard(false);
  };

  const openBasket = bool => {
    setModalBasket(bool);
  };
  return (
    <>
      <Header openBusket={openBasket} />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home arr={setBasketArr} />} />
          <Route
            path="/MyPlace"
            element={
              <Menu prop={MenuMyPlace} clickOnCard={onClickCardHandler} />
            }
          />
          <Route
            path="/SushiFamily"
            element={
              <Menu prop={MenuSushiFamily} clickOnCard={onClickCardHandler} />
            }
          />
          <Route
            path="/MaCherie"
            element={
              <Menu prop={MenuMaCherie} clickOnCard={onClickCardHandler} />
            }
          />
          <Route
            path="/KFC"
            element={<Menu prop={MenuKFC} clickOnCard={onClickCardHandler} />}
          />
          <Route
            path="/PizzaDay"
            element={<Menu prop={MenuPizza} clickOnCard={onClickCardHandler} />}
          />
          <Route
            path="/Shaurmichka"
            element={
              <Menu prop={MenuShaurmichka} clickOnCard={onClickCardHandler} />
            }
          />

          <Route
            path="/Laziz"
            element={<Menu prop={MenuLaziz} clickOnCard={onClickCardHandler} />}
          />
          <Route
            path="/Sempai"
            element={<Menu prop={Sempai} clickOnCard={onClickCardHandler} />}
          />
          {/* <Route
            path="/food_del/SushiZoom"
            element={<Menu prop={menuSushiZoom} clickOnCard={onClickCardHandler} />}
          />
          <Route
            path="/food_del/OsamaSushi"
            element={<Menu prop={menuOsamaSushi} clickOnCard={onClickCardHandler} />}
          /> */}
        </Routes>
      </AppWrapper>
      <Footer />
      {modalCard && (
        <ModalCard
          basketArr={basketArr}
          clickAddBasket={clickBasketHandler}
          modalClose={closeModal}
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
        <ToTopBtn
          className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <img src={arrow_top} alt="arrow_top" />
        </ToTopBtn>
      )}
    </>
  );
};

export default App;
