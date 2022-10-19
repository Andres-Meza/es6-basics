const axios = require('axios');

axios.get(
  "https://pokeapi.co/api/v2/pokemon/"
)
  .then((response) => {
    console.log(response.data.results);
  })
  .catch((error) => {
    console.log(error);
  });