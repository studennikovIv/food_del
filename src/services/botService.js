import { request } from './request';
import Notiflix from 'notiflix';

class BotApi {
  _botToken = '6175964793:AAFU_yX2YGSWvbfBjSdhy2wdNQBss0WN0A0';
  _chatId = '-1001877977361';

  sendMessage = async (tel, streat, house, coments, food, total, kafe) => {
    //TODO replace this map to store
    food.map(({ name, span }) => {
      return (res += [`${name} - ${span}, `]);
    });

    try {
      const res = await request.post(
        `https://api.telegram.org/bot${this._botToken}/sendMessage`,
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

      Notiflix.Notify.success(
        `Замовлення офрмлене, зараз  з вами зв'яжеться  менеджер.`,
        {
          timeout: 6000,
        }
      );
    } catch (error) {
      Notiflix.Notify.failure(`${error}`);
      return error;
    }
  };
}

export const botService = new BotApi();
