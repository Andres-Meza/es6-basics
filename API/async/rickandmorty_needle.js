const axios = require('axios');

let config = {
  method: 'GET',
  url: 'https://rickandmortyapi.com/api/character/'
}

const request = async () => {
  try {
    let response = await axios(config);
    response.data.results.forEach(element => {
      console.log(`Nombre: ${element.name}`);
      console.log("++++++++++++++++++++++++++++++")
    });
    console.log(response.data.results);
  } catch (e) {
  console.log(e);
  }
}
request();