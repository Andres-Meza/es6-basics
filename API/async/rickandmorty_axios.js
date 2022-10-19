const axios = require('axios');

let config = {
  method: 'GET',
  url: 'https://rickandmortyapi.com/api/character/'
}

const request = async () => {
  try {
    let response = await axios(config);
    response.data.results.forEach(element => {
      console.log(`Id: ${element.name}`);
      console.log("++++++++++++++++++++++++++++++")
    });
  } catch (e) {
    console.log(e);
  }
}
request();

axios(config)
  .then((response) => {
    console.log(response.data.urls);
  })
  .catch((error) => {
    console.log(error);
  });