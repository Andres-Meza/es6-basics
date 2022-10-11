const request = require('request')

let endpoint = 'https://restcountries.com/v3.1/all';

const result = request(endpoint , { json : true}  , function (error , response , data){
    data.results.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log("++++++++++++++++++++++++++++++")
        
    });
    console.log(data)
})