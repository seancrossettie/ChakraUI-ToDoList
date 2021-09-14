import axios from 'axios';

const getRandomDrink = () => new Promise((resolve, reject) => {
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => resolve(response.data.drinks))
    .catch((error) => reject(error));
});

export default getRandomDrink;
