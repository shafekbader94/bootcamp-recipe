const express = require("express");
const path = require("path");
const urllib = require("urllib");
const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/recipes/:ingredient", function (request, response) {
  let ingred = request.params.ingredient;

  urllib.request(
    `https://recipes-goodness.herokuapp.com/recipes/${ingred}`,
    function (err, data, res) {
      if (err) {
        throw err; // you need to handle error
      }
      const meal = JSON.parse(data.toString()).results;
      const mealArray = meal.map((m) => {
        return {
          ingredients: m.ingredients,
          title: m.title,
          thumbnail: m.thumbnail,
          href: m.href,
        };
      });

      response.send(mealArray);
    }
  );
});


app.get("/sanity", function (request, response) {
  response.send("OK");
});

app.get("/", function (request, response) {
  response.send("Server is up and running smoothly");
});

app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
