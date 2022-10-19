//API de datos de Países
//CALLBACK - Funcion Flecha

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://rickandmortyapi.com/api/character/';

const exito = (response) => {
  const elements = JSON.parse(response).results;
  elements.forEach(element => {
    console.log(`Nombre: ${element.name}`);
    console.log("-----------------------------------")
  });
}

const fallo = (status) => {
  console.log(status)
}

const getData = (endpoint) => {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.send();
    xhr.onload = () => {
      if( xhr.status === 200 ){
        resolve(xhr.responseText);
      }else{
        reject(xhr.status);
      }
    }
  });
  return promise;
}

getData(endpoint)
  .then(( response ) => {
    exito(response);
  })
  .catch((status) => {
    fallo(status);
  });
