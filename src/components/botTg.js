import axios from 'axios';

const botToken = '6175964793:AAFU_yX2YGSWvbfBjSdhy2wdNQBss0WN0A0';
const chatId = '-928235385';

export const sendMessage = (tel, food, total, kafe) => {
  let res = [];

  food.map(({ name, span }) => {
    return (res += [`${name} - ${span}, `]);
  });
  const axiosInstance = axios.post(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      chat_id: chatId,
      text: `Заведение: ${kafe}, Телефон: ${tel},  Заказ: ${res}. Сумма: ${
        total + 50
      }`,
    }
  );

  axiosInstance
    .then(response => {
      console.log('Message sent:', response.data);
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
};
