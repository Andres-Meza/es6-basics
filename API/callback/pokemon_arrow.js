//API de datos de Países
//CALLBACK - Funcion Flecha

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/pokemon/';

const exito = (response) => {
  const elements = JSON.parse(response).results;
  elements.forEach(element => {
    console.log(`Pokemon: ${element.name}`);
    console.log(`Url: ${element.url}`);
    console.log("-----------------------------------")
  });
}

const fallo = (status) => {
  console.log(status)
}

const getData = (endpoint, exito, fallo) =>{
  let xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);
  xhr.send();
  xhr.onload = () => {
    if( xhr.status === 200 ){
      exito(xhr.responseText)
    }else{
      fallo(xhr.status)
    }
  }
}

getData(endpoint, exito, fallo)
