import miniLaziz from './img/laziz-min.jpg';
import standart from './img/standart-min.jpg';
import laziz from './img/laziz z morkvoy-min.jpg';
import burum from './img/burum-min.jpg';
import xxl from './img/xxl-min.jpg';
import chikenSet from './img/chickenset-min.jpg';
const menuLaziz = [
  {
    nameInst: 'laziz',
    title: 'Шаурма',
    list: [
      {
        img: miniLaziz,
        title: 'Шаурма',
        name: 'Міні-лазіз',
        text: "До складу входить: м'ясо курки, морква, картопля",
        price: 60,
      },
      {
        img: standart,
        title: 'Шаурма',
        name: 'Стандарт',
        text: "До складу входить: м'ясо курки",
        price: 85,
      },
      {
        img: laziz,
        title: 'Шаурма',
        name: 'Лазіз',
        text: "До складу входить: м'ясо курки, картопля",
        price: 110,
      },
      // {
      //   // img: menu1,
      //   title: 'Шаурма',
      //   name: 'Баранина',
      //   text: "До складу входить: м'ясо баранини, капуста, цибуля, памідор",
      //   price: 140,
      // },
      {
        img: burum,
        title: 'Шаурма',
        name: 'Бурум',
        text: "До складу входить: м'ясо курки, ананас, сир помідор ",
        price: 170,
      },
      {
        img: xxl,
        title: 'Шаурма',
        name: 'XXL',
        text: "До складу входить: м'ясо курки, картопля, сир ",
        price: 200,
      },
      {
        img: chikenSet,
        title: 'Шаурма',
        name: 'Чікен сет',
        text: "До складу входить: м'ясо курки, картопля, соус, лаваш",
        price: 250,
      },
    ],
  },
];

export default menuLaziz;
