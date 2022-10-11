//API de datos de Países

//CALLBACK - Normal

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://restcountries.com/v3.1/all';

function exito(reponse){
    console.log(JSON.parse(reponse));
}

function fallo(status){
    console.log(status)
}

function getData(endpoint, exito, fallo){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.send();
    xhr.onload = function(){
        if( xhr.status === 200 ){
            exito(xhr.responseText)
        }else{
            fallo(xhr.status)
        }
    }
}

getData(endpoint, exito, fallo)

