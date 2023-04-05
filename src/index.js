// TODO: cool stuff
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Fetch a random recipe from the Spoonacular API
  fetch('https://api.spoonacular.com/recipes/random?apiKey=80cf1614d6df4af9a16d5be110db7167')
    .then(response => response.json())
    .then(data => {
      // Render the recipe on the webpage using EJS
      res.render('index', { recipe: data.recipes[0] });
    })
    .catch(error => console.log(error));
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
