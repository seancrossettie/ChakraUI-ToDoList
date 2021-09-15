import { Text, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import getRandomDrink from '../../helpers/data/drinkData';
import DrinkCard from '../Cards/DrinkCard';

function App() {
  const [randomDrink, setRandomDrink] = useState([]);

  return (
    <>
      <VStack>
        <Text m={2} fontSize='6xl' fontWeight='bold'>Cocktail Generator</Text>
      </VStack>
      <VStack>
        <Button
          onClick={() => { getRandomDrink().then((response) => setRandomDrink(response)); }}
          m='8'
        >
          Get Random Drink
        </Button>
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
