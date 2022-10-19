const request = require('request')

let endpoint = 'https://rickandmortyapi.com/api/character/';

request(endpoint , { json : true}  , (error , response , body) => {
  response.body.results.forEach(element => {
    console.log(`Nombre: ${element.name}`);
    console.log("++++++++++++++++++++++++++++++")
  });
})