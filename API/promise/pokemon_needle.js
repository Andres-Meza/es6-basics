const needle = require('needle');

const endpoint = "https://pokeapi.co/api/v2/pokemon/";

needle('GET', endpoint)
  .then((response) => {
    console.log(response.body.results);
  })
  .catch((err) => {
    console.log(err);
  });