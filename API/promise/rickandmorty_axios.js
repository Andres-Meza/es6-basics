const axios = require('axios');

let config = {
  method: 'GET',
  url: 'https://rickandmortyapi.com/api/character/'
}

axios(config)
  .then((response) => {
    console.log(response.data.results);
  })
  .catch((error) => {
    console.log(error);
  });