//API de Rick & Morty

//CALLBack

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://rickandmortyapi.com/api/character/';

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
        exito(xhr.responseText)
    }
}

getData(endpoint, exito, fallo)