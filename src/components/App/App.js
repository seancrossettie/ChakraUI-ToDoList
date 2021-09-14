import { Text, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import React from 'react';
import getRandomDrink from '../../helpers/data/drinkData';

function App() {
  return (
    <>
      <VStack>
        <Text m={2} fontSize='6xl' fontWeight='bold'>Cocktail Generator</Text>
      </VStack>
      <VStack>
        <Button onClick={() => getRandomDrink().then((response) => console.warn(response))}>Get Random Drink</Button>
      </VStack>
    </>
  );
}

export default App;
