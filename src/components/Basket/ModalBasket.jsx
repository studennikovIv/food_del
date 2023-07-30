import { BasketDropWrapper } from '../Menu/card/styled/ModalCard.styled';
import { CardBasket } from './card/BasketCard.jsx';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BasketFormClient } from './card/BasketFormClient';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  CloseButton,
  Center,
  Image,
  IconButtonProps,
} from '@chakra-ui/react';

import {
  BasketWrapper,
  TopWrapper,
  BasketTitle,
  BottomWrapper,
  EmptyMessage,
  CloseBtn,
  SumWrapper,
  BtnWrapper,
  LeftButton,
  RightButton,
  BottomContainer,
  CardContainer,
} from './styled/ModalBasket.styled';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/index';

export const ModalBasket = observer(({ modalClose, reset }) => {
  const { basketStore } = useStore();
  const basketArr = basketStore.getBasketItems;
  const [basketFormClient, setBasketFormClient] = useState(false);
  // console.log(basketArr);
  const closeButton = () => {
    basketStore.openBusket = false;
  };
  const submitForm = () => {
    // Call the sendForm function from BasketFormClient
    sendForm();
  };
  const clickBtn = () => {
    if (basketFormClient === false || basketFormClient === true) {
      setBasketFormClient(true);
      console.log(basketFormClient);
    } else {
      setBasketFormClient(false);
    }
  };

  const sendForm = e => {
    const form = document.getElementById('myForm');
    form.submit(e);
  };
  // const total = basketArr.reduce((acc, p) => acc + p.price * p.span, 0);

  return (
    <BasketDropWrapper display={basketStore.openBusket ? 'block' : 'none'}>
      <Center>
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="300px"
          minHeight="250px"
          maxHeight="500px"
          bg="white"
          borderLeft="1px solid gray"
          p="4"
        >
          {/* Заголовок и кнопка закрытия */}
          <Flex justifyContent="space-between" alignItems="center" mb="4">
            <Heading size="md">Корзина</Heading>
            <IconButton
              key="IconButtonClose"
              icon={<CloseButton />}
              onClick={closeButton}
            />
          </Flex>
          {basketArr.length === 0 && basketFormClient === false && (
            <Box
              mt="4"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100px"
            >
              <Text textAlign="center">У Вашому кошику порожньо</Text>
            </Box>
          )}

          {/* Список товаров */}
          <Box
            overflowX="hidden"
            minHeight="200px"
            maxHeight="40vh"
            sx={{
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#FF0000',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#f1f1f1',
              },
              '&::-webkit-scrollbar-button': {
                backgroundColor: '#FF0000',
                height: '3px',
                borderRadius: '50%',
              },
              '&::-webkit-scrollbar-button:vertical:increment': {
                backgroundColor: '#FF0000',
              },
              '&::-webkit-scrollbar-button:active': {
                backgroundColor: '#555',
              },
            }}
          >
            {basketFormClient === false &&
              basketArr.length !== 0 &&
              basketArr.map(obj => (
                <>
                  <CardBasket
                    key={nanoid()}
                    plus={basketStore.handleAdd}
                    basketArr={obj}
                    minus={basketStore.handleRemove}
                    arr={basketArr}
                  />
                </>
              ))}
            {basketFormClient === true && (
              <>
                <BasketFormClient
                  food={basketArr}
                  // total={total}
                  resetBasket={reset}
                  basketFormClient={setBasketFormClient}
                />
              </>
            )}
          </Box>
          {basketArr.length !== 0 && (
            <>
              {/* Кнопки "Продолжить покупки" и "Оформить заказ" */}
              {basketFormClient === false && (
                <>
                  <Box mt="4">
                    <Text>Сумма товаров: {basketStore.sum} грн.</Text>
                    <Text>Сумма доставки:50грн.</Text>
                    <Text>Итого: {basketStore.sum + 50} грн.</Text>
                  </Box>
                  <Flex justifyContent="space-between" mt="4">
                    <Button onClick={closeButton} fontSize="11px">
                      Продолжить покупки
                    </Button>
                    <Button
                      colorScheme="red"
                      fontSize="11px"
                      onClick={clickBtn}
                    >
                      Оформити замовлення
                    </Button>
                  </Flex>
                </>
              )}

              {basketFormClient === true && basketArr.length !== 0 && (
                <>
                  <Box mt="4">
                    <Text>Сумма товаров: {basketStore.sum} грн.</Text>
                    <Text>Сумма доставки:50грн.</Text>
                    <Text>Итого: {basketStore.sum + 50} грн.</Text>
                  </Box>
                  <BtnWrapper>
                    <Button onClick={closeButton} fontSize="11px">
                      Продовжіти покупки
                    </Button>
                    <Button
                      colorScheme="red"
                      fontSize="11px"
                      onClick={submitForm}
                    >
                      Відправити замовлення
                    </Button>
                  </BtnWrapper>
                </>
              )}
            </>
          )}
        </Box>
      </Center>
    </BasketDropWrapper>
  );
});
