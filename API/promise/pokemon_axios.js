const axios = require('axios');

let config = {
  method: 'GET',
  url: 'https://pokeapi.co/api/v2/pokemon/'
}

axios(config)
  .then((response) => {
    console.log(response.data.results);
  })
  .catch((error) => {
    console.log(error);
  });