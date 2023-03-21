// TODO make cool stuff
import { loadHeaderFooter } from "./utils.mjs";
import axios from 'axios';
/*
document.addEventListener('DOMContentLoaded', () => {
    loadHeaderFooter();
});

*/

let header = document.querySelector("#main-header");
header.innerHTML = `
<div class="container">
    <h1>hello</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Properties</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</div>
` ;

let footer = document.querySelector("#main-footer");
footer.innerHTML = `
<p>copyright stuff</p> `

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

const helloNode = document.createElement('h1');
helloNode.textContent = "Hello World";

document.getElementById('root').appendChild(helloNode);

