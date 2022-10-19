const axios = require('axios');

let config = {
  method: 'GET',
  url: 'https://animechan.vercel.app/api/random'
}

const request = async () => {
  try {
    let response = await axios(config);
    console.log(response.data.anime)
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
