const axios = require('axios');

axios.get(
  "https://rickandmortyapi.com/api/character/"
)
  .then((response) => {
    console.log(response.data.results);
  })
  .catch((error) => {
    console.log(error);
  });