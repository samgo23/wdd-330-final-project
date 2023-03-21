// In pages/api/location.js:
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete',
  params: {input: 'new york', limit: '10'},
  headers: {
    'X-RapidAPI-Key': 'f19d96850emsh553516ce3b3cd77p1d1cccjsn132accbe8537',
    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});