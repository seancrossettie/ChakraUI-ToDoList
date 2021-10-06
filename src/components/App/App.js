import {
  Flex
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import getRandomDrink from '../../helpers/data/drinkData';
import DrinkCard from '../Cards/DrinkCard';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  const [randomDrink, setRandomDrink] = useState([]);
  const [ingredientArr, setIngredientArr] = useState([]);

  return (
    <Flex flexDirection='row' justifyContent='space-around'>
      <Sidebar />
      <Flex flexDirection='column'>
        <Button
          m='8'
          onClick={() => {
            getRandomDrink().then((response) => {
              setRandomDrink(response);
              const ingredients = (Object.entries(response[0])
                .filter((keyValueArr) => keyValueArr[0]
                  .includes('strIngredient') && keyValueArr[1] !== null))
                .map((item) => item.pop());
              const ingredientAmounts = (Object.entries(response[0])
                .filter((keyValueArr) => keyValueArr[0]
                  .includes('strMeasure') && keyValueArr[1] !== null))
                .map((item) => item.pop());
              setIngredientArr(Object.entries(Object.assign(...ingredients.map((k, i) => ({ [k]: ingredientAmounts[i] })))));
            });
          }}
        >
          Get Random Drink
        </Button>
        {randomDrink.map((drink, i) => (
          <DrinkCard
            key={i}
            drinkName={drink.strDrink}
            glass={drink.strGlass}
            instructions={drink.strInstructions}
            drinkImage={drink.strDrinkThumb}
            ingredientArr={ingredientArr}
          />
        ))}
      </Flex>
      </Flex>
  );
}

export default App;
