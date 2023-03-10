import { arreyListShopping } from '../../Menu/OneCard';

export function yourOrder() {
  let fullPrice = 50;
  let nameList = [];
  arreyListShopping.map(({ name, price }) => {
    nameList.push(name);
    return (fullPrice += price);
  });
  console.log('Ваше замовлення: ', nameList);
  console.log('До сплати: ', fullPrice, 'грн.');
}
