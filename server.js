const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/sanity/:ingredient", (request, response) => {
  let ingredient = request.params.ingredient;
  axios
    .get("https://recipes-goodness.herokuapp.com/recipes/YOUR_INGREDIENT")
    .then(function (res) {
      const recipes = res.data.results;
      recipes.map((recipe) => ({
        title: recipe.title,
        thumbnail: recipe.thumbnail,
        ingredients: recipe.ingredients,
        link: recipe.href,
      }));
      response.send(recipes);
    });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
