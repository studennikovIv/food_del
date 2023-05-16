import shaurma from './img/shaurma.jpg';
import pizza from './img/pizza.jpg';
import potato from './img/potato.jpg';
import nagets from './img/nagets.jpg';
import hotDog from './img/hotDog.jpg';
import voda from './img/voda1.jpg';
import cola from './img/voda3.jpg';
import sprite from './img/voda7.jpg';
import fanta from './img/voda9.jpg';
const menuShaurmichka = [
  {
    nameInst: 'Шаурмичка',
    title: 'Шаурма',
    list: [
      {
        img: shaurma,
        title: 'Шаурма',
        name: 'Арабська',
        text: 'Картопля, солоні огірки, соус, мясо курки, лаваш ',
        price: 130,
        mass: '-',
      },
      {
        img: shaurma,
        title: 'Шаурма',
        name: 'Подвійна',
        text: 'Капуста, морква по корейськи, солоні огірки, соус, мясо курки, лаваш ',
        price: 160,
        mass: '-',
      },
      {
        img: shaurma,
        title: 'Шаурма',
        name: 'Стандарт з куркою',
        text: ' Капуста, морква по корейськи, солоні огірки, соус, мясо курки, лаваш ',
        price: 120,
        mass: '-',
      },
      {
        img: shaurma,
        title: 'Шаурма',
        name: 'Міні',
        text: 'Капуста, морква по корейськи, солоні огірки, соус, мясо курки, лаваш ',
        price: 90,
        mass: '-',
      },
      {
        img: shaurma,
        title: 'Шаурма',
        name: 'Бурум',
        text: ' Сир, помідор, мясо курки, соус, лаваш',
        price: 130,
        mass: '-',
      },
      {
        img: shaurma,
        title: 'Шаурма',
        name: 'Донер',
        text: 'Сир, помідор, мясо курки, соус, солоні огірки, булка',
        price: 140,
        mass: '-',
      },
    ],
  },

  //   Піцца
  {
    title: 'Піцца',
    list: [
      {
        img: pizza,
        title: 'Піцца',
        name: 'Цезар',
        text: 'соус Цезар, курка, балик, чері, сухарі, моцарелла, лист салату',
        price: 185,
        mass: '35см',
      },
      {
        img: pizza,
        title: 'Піцца',
        name: 'Падишах',
        text: 'вершки, курка, балик, помідор, ананас, моцарела',
        price: 175,
        mass: '35см',
      },
      {
        img: pizza,
        title: 'Піцца',
        name: 'Хан',
        text: ' томатний соус, курка, балик, помідор, гриби, маслини, моцарела',
        price: 165,
        mass: '35см',
      },
      {
        img: pizza,
        title: 'Піцца',
        name: 'Піде з куркою',
        text: 'фарш курки, помідор, кетчуп, моцарела, цибуля маринована',
        price: 120,
        mass: '-',
      },
      {
        img: pizza,
        title: 'Піцца',
        name: 'Піде з яловичиною',
        text: 'фарш яловичий, помідор, гострий соус, моцарела, цибуля маринована',
        price: 140,
        mass: '-',
      },
      {
        img: pizza,
        title: 'Піцца',
        name: 'Чотири сира',
        text: ' вершковий соус, моцарела, брі, фета, пармезан',
        price: 200,
        mass: '-',
      },
      {
        img: pizza,
        title: 'Піцца',
        name: 'Карбонара',
        text: 'вершковий соус, моцарела, грудка, помідор, жовток',
        price: 170,
        mass: '-',
      },
      {
        img: pizza,
        title: 'Піцца',
        name: 'Пеппероні',
        text: ' соус томатний, пепероні, помідор, моцарела',
        price: 180,
        mass: '-',
      },
    ],
  },

  //   Картопля фрі
  {
    title: 'Картопля фрі',
    list: [
      {
        img: potato,
        title: 'Картопля фрі',
        name: 'Міні',
        text: '',
        price: 55,
        mass: '90гр',
      },
      {
        img: potato,
        title: 'Картопля фрі',
        name: 'Стандарт',
        text: '',
        price: 75,
        mass: '200гр',
      },
      {
        img: potato,
        title: 'Картопля фрі',
        name: 'Велика',
        text: '',
        price: 140,
        mass: '400гр',
      },
    ],
  },

  //   Нагетси
  {
    title: 'Нагетси',
    list: [
      {
        img: nagets,
        title: 'Нагетси',
        name: 'Нагетси Міні',
        text: '',
        price: 85,
        mass: '6шт',
      },
      {
        img: nagets,
        title: 'Нагетси',
        name: 'Нагетси Стандарт',
        text: '',
        price: 105,
        mass: '9шт',
      },
      {
        img: nagets,
        title: 'Нагетси',
        name: 'Нагетси Макс',
        text: '',
        price: 210,
        mass: '20шт',
      },
    ],
  },

  //   Хот-дог
  {
    title: 'Хот-дог',
    list: [
      {
        img: hotDog,
        title: 'Хот-дог',
        name: 'Хот-дог французький',
        text: '',
        price: 60,
        mass: '1шт',
      },
    ],
  },
  {
    title: 'Напої',
    list: [
      {
        img: voda,
        title: 'Напої',
        name: 'Вода',
        text: 'Вода питна, виробник може відлічатися від зображення, уточнюйте у оператора',
        price: 25,
        mass: '0,5л',
      },
      {
        img: cola,
        title: 'Напої',
        name: 'Кока-кола',
        text: 'Кока-кола 0,5л напій безалкогольний сильногазований.',
        price: 30,
        mass: '0,5л',
      },
      {
        img: fanta,
        title: 'Напої',
        name: 'Фанта',
        text: 'Фанта 0,5л напій безалкогольний сильногазований.',
        price: 30,
        mass: '0,5л',
      },
      {
        img: sprite,
        title: 'Напої',
        name: 'Спрайт',
        text: 'Спрайт 0,5л напій безалкогольний сильногазований.',
        price: 30,
        mass: '0,5л',
      },
    ],
  },
];

export default menuShaurmichka;
