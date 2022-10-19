let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/pokemon/';

const exito = (response) => {
  const elements = JSON.parse(response).results;
  elements.forEach(element => {
    console.log(`Pokemon: ${element.name}`);
    console.log(`Url Pokemon: ${element.url}`);
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
