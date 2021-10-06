import {
  Badge, Box, Text
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import PropTypes from 'prop-types';
import React from 'react';
import IngredientCard from './IngredientCard';

const DrinkCard = ({
  drinkName,
  glass,
  instructions,
  drinkImage,
  ingredientArr,
}) => (
    <Box
      m={5}
      w='375px'
      rounded='20px'
      overflow='hidden'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderWidth='1px'
    >
      <Image borderRadius='md' src={drinkImage} alt={drinkImage}/>
      <Box p='2' d='flex' flexDirection='column' alignContent='space-evenly'>
        <Text fontSize='xl'>{drinkName}</Text>
        <Badge my='1' variant='outline' rounded='full' mr='auto'>{glass}</Badge>
      </Box>
      <Box mx={3}>
        <Text fontSize='sm' mt='2' fontStyle='italic' fontWeight='bold'>Ingredients</Text>
        {
          ingredientArr.map((ing, i) => <IngredientCard key={i} ingredient={ing[0]} amount={ing[1]} />)
        }
      </Box>
        <Box mx={3}>
          <Text fontSize='sm' mt='2' fontStyle='italic' fontWeight='bold'>Instructions</Text>
          <Text fontSize='sm' mb='1'>{instructions}</Text>
        </Box>
    </Box>
);

DrinkCard.propTypes = {
  drinkName: PropTypes.string.isRequired,
  glass: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  drinkImage: PropTypes.string,
  ingredientArr: PropTypes.array
};

export default DrinkCard;
