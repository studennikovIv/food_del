// import { useState } from 'react';
// import cat from '../../cat.png';
import notHaveFoto from '../../notHaveFoto.png';
import { Box } from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react';

import {
  ONE_CARD_LI,
  IMAGE_IMG,
  NAME_DISH_H1,
  DESCRIPTION_P,
  SUPPORT_DIV,
  MASSA_P,
  SIZE_P,
  BUTTON_PRICE,
} from './styled/OneCard.styled';

export { ModalCard } from './ModalCard';
export function OneCard({ position, clickOnCard }) {
  // const { list } = position;
  let linkImg = '';
  let linkName = '';
  let linkPrice = '';
  let linkText = '';

  const ClickOpenModal = () => {
    clickOnCard(true, linkImg, linkName, linkPrice, linkText);
  };
  return position.map(({ img, name, text, price, mass, size }) => {
    const imagePath = require(`../../MenuAllBookmarks/${img}`);
    const property = {
      imageUrl: imagePath,
      imageAlt: name,
      title: text,
      formattedPrice: price,
    };
    return (
      // <ONE_CARD_LI
      //   key={name}
      //   onClick={() => {
      //     linkImg = img;
      //     linkName = name;
      //     linkPrice = price;
      //     linkText = text;
      //     ClickOpenModal();
      //   }}
      // >
      //   <IMAGE_IMG src={img ? imagePath : notHaveFoto} alt={name} />
      //   {/* {img ? (
      //     <IMAGE_IMG src={imagePath} alt={name} />
      //   ) : (
      //     <IMAGE_IMG src={notHaveFoto} alt="food-del" />
      //   )} */}
      //   <NAME_DISH_H1>{name}</NAME_DISH_H1>
      //   {text && <DESCRIPTION_P>{text}</DESCRIPTION_P>}
      //   <SUPPORT_DIV>
      //     {size && <SIZE_P>{size}</SIZE_P>}
      //     {mass && <MASSA_P>{mass}</MASSA_P>}
      //   </SUPPORT_DIV>
      //   <BUTTON_PRICE>{price}₴</BUTTON_PRICE>
      // </ONE_CARD_LI>
      <Box
        key={name}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        onClick={() => {
          linkImg = img;
          linkName = name;
          linkPrice = price;
          linkText = text;
          ClickOpenModal();
        }}
      >
        <Image src={property.imageUrl} alt={property.imageAlt} />
        <Box
          p="6"
          paddingBottom="10px"
          // whiteSpace="nowrap"
          // textOverflow="ellipsis"
        >
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal"></Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
            textAlign="center"
          >
            {property.imageAlt}
          </Box>

          <Box textAlign="right">
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              ₴
            </Box>
          </Box>

          {/* <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box> */}
        </Box>
      </Box>
    );
  });
}
