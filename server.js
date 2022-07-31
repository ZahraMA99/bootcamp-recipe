const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/sanity", function (request, response) {
  response.send("Ok");
});

app.get("/recipes/:ingredient", function (request, response) {
  let ingredient = request.params.ingredient;
  axios
    .get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`)
    .then(function (res) {
      let recipes = res.data.results;
      let r = recipes.map((recipe) => ({
        ingredients: recipe.ingredients,
        title: recipe.title,
        thumbnail: recipe.thumbnail,
        href: recipe.href,
      }));
      response.send(r);
    });
});

const port = 3003;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
