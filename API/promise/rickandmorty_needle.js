const needle = require('needle');

const endpoint = "https://rickandmortyapi.com/api/character/";

needle('GET', endpoint)
  .then((response) => {
    console.log(response.body.results);
  })
  .catch((err) => {
    console.log(err);
  });