const request = require('request')

let endpoint = 'https://pokeapi.co/api/v2/pokemon/';

request(endpoint , { json : true}  , (error , response , body) => {
  response.body.results.forEach(element => {
    console.log(`Pokemon: ${element.name}`);
    console.log(`URL: ${element.url}`);
    console.log("++++++++++++++++++++++++++++++")
  });
})