import miniLaziz from './img/laziz-min.jpg';
import standart from './img/standart-min.jpg';
import laziz from './img/laziz z morkvoy-min.jpg';
import burum from './img/burum-min.jpg';
import xxl from './img/xxl-min.jpg';
import chikenSet from './img/chickenset-min.jpg';
import halif from './img/halif-min.jpg';
import baran from './img/baranina.jpg';
import fanta from './img/fanta.jpg';
import cola from './img/cola.jpg';
import sprite from './img/sprite.jpg';
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
        price: 65,
      },
      {
        img: standart,
        title: 'Шаурма',
        name: 'Стандарт',
        text: "До складу входить: м'ясо курки",
        price: 90,
      },
      {
        img: laziz,
        title: 'Шаурма',
        name: 'Лазіз',
        text: "До складу входить: м'ясо курки, картопля",
        price: 115,
      },
      {
        img: baran,
        title: 'Шаурма',
        name: 'Баранина',
        text: "До складу входить: м'ясо баранини, капуста, цибуля, памідор",
        price: 145,
      },
      {
        img: burum,
        title: 'Шаурма',
        name: 'Бурум',
        text: "До складу входить: м'ясо курки, ананас, сир помідор ",
        price: 175,
      },
      {
        img: xxl,
        title: 'Шаурма',
        name: 'XXL',
        text: "До складу входить: м'ясо курки, картопля, сир ",
        price: 205,
      },
      {
        img: chikenSet,
        title: 'Шаурма',
        name: 'Чікен сет',
        text: "До складу входить: м'ясо курки, картопля, соус, лаваш",
        price: 255,
      },
      {
        img: halif,
        title: 'Шаурма',
        name: 'Халіф',
        text: '',
        price: 145,
      },
    ],
  },
  {
    title: 'Напої',
    list: [
      {
        img: cola,
        title: 'Напої',
        name: 'Кока-кола',
        text: 'Кока-кола 0,5л напій безалкогольний сильногазований.',
        price: 35,
      },
      {
        img: fanta,
        title: 'Напої',
        name: 'Фанта',
        text: 'Фанта 0,5л напій безалкогольний сильногазований.',
        price: 35,
      },
      {
        img: sprite,
        title: 'Напої',
        name: 'Спрайт',
        text: 'Спрайт 0,5л напій безалкогольний сильногазований.',
        price: 35,
      },
    ],
  },
];

export default menuLaziz;
