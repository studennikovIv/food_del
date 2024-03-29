import axios from 'axios';
import Notiflix from 'notiflix';

const botToken = '6175964793:AAFU_yX2YGSWvbfBjSdhy2wdNQBss0WN0A0';
const chatId = '-1001877977361';

export const sendMessage = (tel, streat, house, coments, food, total, kafe) => {
  let res = [];

  food.map(({ name, span }) => {
    return (res += [`${name} - ${span}, `]);
  });
  const axiosInstance = axios.post(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      chat_id: chatId,
      text: `${kafe}
      Замовлення:
      ${res} 
      Коментар:${coments}

      Доставка за адресою: 
      Вулиця:${streat},будинок:${house}
      Телефон: ${tel}


      До сплати клієнтом: ${total + 50}.
      `,
    }
  );

  axiosInstance
    .then(response => {
      // console.log('Message sent:', response.data);
      Notiflix.Notify.success(
        `Замовлення офрмлене, зараз  з вами зв'яжеться  менеджер.`,
        {
          timeout: 3000,
        }
      );
      return response.data;
    })
    .catch(error => {
      Notiflix.Notify.failure(`${error}`);
      return error;
    });
};
