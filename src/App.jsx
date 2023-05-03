import React, { useState, useEffect } from 'react';
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
// import menuSushiZoom from 'components/MenuAllBookmarks/SushiZoom/menuSushiZoom.jsx';
// Osama Sushi
// import menuOsamaSushi from 'components/MenuAllBookmarks/OsamaSushi/OsamaSushi.jsx';
// MyPlace
import menuMyPlace from './components/MenuAllBookmarks/MyPlace/MyPlace';
// Laziz
import menuLaziz from 'components/MenuAllBookmarks/Laziz/Laziz';
function App() {
  const [modalCard, useModalCard] = useState(false);
  const [imgModal, useImgModal] = useState('');
  const [nameModal, useNameModal] = useState('');
  const [priceModal, usePriceModal] = useState('');
  const [textModal, useTextModal] = useState('');

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

  const ClickOnCard = (bool, img, name, price, text) => {
    useModalCard(bool);

    useImgModal(img);
    useNameModal(name);
    usePriceModal(price);
    useTextModal(text);
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
            path="/KFC"
            element={<Menu prop={menuKFC} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/PizzaDay"
            element={<Menu prop={menuPizza} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/Shaurmichka"
            element={<Menu prop={menuShaurmichka} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/SushiFamily"
            element={<Menu prop={menuSushiFamily} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/MaCherie"
            element={<Menu prop={menuMaCherie} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/MyPlace"
            element={<Menu prop={menuMyPlace} clickOnCard={ClickOnCard} />}
          />
          <Route
            path="/Laziz"
            element={<Menu prop={menuLaziz} clickOnCard={ClickOnCard} />}
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
      )}
    </>
  );
}

export default App;
