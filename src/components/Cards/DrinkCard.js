import {
  Badge, Box, Text
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import PropTypes from 'prop-types';
import React from 'react';

const DrinkCard = ({
  drinkName,
  glass,
  instructions,
  drinkImage,
}) => (
    <Box w='375px' rounded='20px' overflow='hidden' boxShadow='lg' borderWidth='1px' className='drink-card-body'>
      <Image borderRadius='md' src={drinkImage} alt={drinkImage}/>
      <Box p='2' d='flex' flexDirection='column' alignContent='space-evenly'>
        <Text fontSize='xl'>{drinkName}</Text>
        <Badge my='1' variant='outline' rounded='full' mr='auto'>{glass}</Badge>
        <Text fontSize='sm' mt='2' fontStyle='italic' fontWeight='bold'>Instructions</Text>
        <Text fontSize='sm' mb='1' fontStyle='italic'>{instructions}</Text>
      </Box>
    </Box>
);

DrinkCard.propTypes = {
  drinkName: PropTypes.string.isRequired,
  glass: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  drinkImage: PropTypes.string,
};

export default DrinkCard;
