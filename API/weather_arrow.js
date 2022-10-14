//API de datos de Países
//CALLBACK - Funcion Flecha

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://goweather.herokuapp.com/weather/Colombia';

const exito = (response) => {
  const elements = JSON.parse(response).forecast;
  elements.forEach(element => {
    console.log(`Dia: ${element.day}`);
    console.log(`Temperatura: ${element.temperature}`);
    console.log(`Viento: ${element.wind}`);
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
