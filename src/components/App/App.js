import { Text, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import getRandomDrink from '../../helpers/data/drinkData';
import DrinkCard from '../Cards/DrinkCard';

function App() {
  const [randomDrink, setRandomDrink] = useState([]);
  const [ingredientArr, setIngredientArr] = useState([]);
  const [ingredientAmountArr, setIngredientAmountArr] = useState([]);

  return (
    <>
      <VStack>
        <Text m={2} fontSize='6xl' fontWeight='bold'>Cocktail Generator</Text>
      </VStack>
      <VStack>
        <Button
          m='8'
          onClick={() => {
            getRandomDrink().then((response) => {
              setRandomDrink(response);
              setIngredientArr(Object.entries(response[0])
                .filter((keyValueArr) => keyValueArr[0]
                  .includes('strIngredient') && keyValueArr[1] !== null));
              setIngredientAmountArr(Object.entries(response[0])
                .filter((keyValueArr) => keyValueArr[0]
                  .includes('strMeasure') && keyValueArr[1] !== null));
            });
          }}
        >
          Get Random Drink
        </Button>
        <Button onClick={() => {
          console.warn(ingredientArr);
          console.warn(ingredientAmountArr);
        }
        }>Test</Button>
      </VStack>
      <VStack>
        {randomDrink.map((drink, i) => (
          <DrinkCard
            key={i}
            drinkName={drink.strDrink}
            glass={drink.strGlass}
            instructions={drink.strInstructions}
            drinkImage={drink.strDrinkThumb}
          />
        ))}
      </VStack>
    </>
  );
}

export default App;
