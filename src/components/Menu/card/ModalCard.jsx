import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/index';
import {
  Flex,
  Center,
  Box,
  Image,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

import {
  BasketDropWrapper,
  WrapButton,
  MODAL_DIV,
  TOP_MODAL_DIV,
  BUTTON_CLOSE,
  CONTENT_DIV,
  INCREASED_INFO_DIV,
  BUTTON_ORDER,
} from './styled/ModalCard.styled';

export const ModalCard = observer(({ modalClose, img, name, price, text }) => {
  const { basketStore } = useStore();
  const ClickOnCard = () => {
    modalClose(false);
  };

  const addBasket = () => {
    basketStore.basketArrAdd(img, name, price, text, 1);
    ClickOnCard();
  };
  const imagePath = require(`../../MenuAllBookmarks/${img}`);
  return (
    <BasketDropWrapper>
      <Center>
        <Flex
          overflow-x="auto"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="4"
          flexDirection="column"
          alignItems="center"
          background="white"
          maxW="300px"
        >
          {/* Изображение товара */}
          <Image src={imagePath} alt={name} maxH="200px" objectFit="cover" />

          {/* Заголовок товара */}
          <Heading mt="4" size="md">
            {name}
          </Heading>

          {/* Описание товара */}
          <Text mt="2">{text}</Text>

          {/* Кнопка с ценой товара */}
          <WrapButton>
            <Button
              mt="4"
              colorScheme="transpared"
              color="#000"
              border="solid 1px red"
              borderRadius="none"
              onClick={ClickOnCard}
            >
              Назад
            </Button>
            <Button
              mt="4"
              colorScheme="red"
              borderRadius="none"
              onClick={addBasket}
            >
              Додати у кошик: {price}₴
            </Button>
          </WrapButton>
        </Flex>
      </Center>
    </BasketDropWrapper>
  );
});
