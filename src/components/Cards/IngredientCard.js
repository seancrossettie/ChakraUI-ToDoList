import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/layout';

const IngredientCard = ({ ingredient, amount }) => (
    <>
      <Text my={1}>{amount}{ingredient}</Text>
    </>
);

IngredientCard.propTypes = {
  ingredient: PropTypes.string,
  amount: PropTypes.string
};

export default IngredientCard;
