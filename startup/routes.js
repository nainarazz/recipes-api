const express = require("express");
const recipes = require("../routes/recipes");

function routes(app) {
  app.use(express.json());
  app.use("/api/recipes", recipes);
}

module.exports = routes;
